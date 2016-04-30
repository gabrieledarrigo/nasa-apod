import React from 'react';
import nasa from '../services/nasa';
import emitter from '../events/event-emitter';
import MediaTypes from '../models/MediaTypes';
import DateImmutable from '../models/DateImmutable';
import Header from './Header';
import Picture from './Picture';
import Video from './Video';

class NasaApod extends React.Component {
	constructor(props) {
		super(props);
        this.state = { media: nasa.getEmptyMedia() };
    }

	componentDidMount() {
        emitter.addListener('date:change', this.getMedia.bind(this));
		return this.getMedia();
	}

    getMedia() {
        const { date } = this.props.params;
        const valid = DateImmutable.isValid(date)
            ? new DateImmutable({ date: date })
            : new DateImmutable({ date: DateImmutable.today() });
        
        return nasa.getMedia(valid)
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
                <div className="content">
                    <Component data={ this.state.media } />
                </div>
            </section>
        );
	}
}

export default NasaApod;