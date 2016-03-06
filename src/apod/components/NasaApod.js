import React from 'react';
import nasa from '../services/nasa';
import emitter from '../utils/event-emitter';
import MediaTypes from '../models/MediaTypes';
import Header from './Header';
import Picture from './Picture';
import Video from './Video';

class NasaApod extends React.Component {
	constructor(props) {
		super(props);
        this.state = { media: nasa.getEmptyMedia() };
    }

	componentDidMount() {
        emitter.addListener('date:change', this.getData.bind(this));
		return this.getData();
	}

    getData(date) {    	
        return nasa.get(date)
            .then(media => this.setState({ media }))
            .catch(err => console.err(err));
    }

    getMediaComponent() {
        const { media } = this.state;
        const type  = media.get('media_type');
        const types =  new MediaTypes({
            image: Picture,
            video: Video,
            default: Picture
        });

        return types.has(type)
                ? types.get(type)
                : types.get('default');
    }

	render() {
        const Component = this.getMediaComponent();

        return (
            <section id="nasa-apod">
                <Header />
                <Component data={ this.state.media } />
            </section>
        );
	}
}

export default NasaApod;