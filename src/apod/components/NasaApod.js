import React from 'react';
import nasa from '../services/nasa';
import MediaTypes from '../models/MediaTypes';
import DateImmutable from '../models/DateImmutable';
import Header from './Header';
import Picture from './Picture';
import Video from './Video';
import LoadingSpinner from './LoadingSpinner';

class NasaApod extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            media: nasa.getEmptyMedia(),
            loading: false
        };
    }

	componentDidMount() {
		return this.getMedia(
            this.computeDateParam(this.props.params.date)
        );
	}

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.date === this.props.params.date) {
            return false;
        }

        return this.getMedia(
            this.computeDateParam(nextProps.params.date)
        );
    }

    computeDateParam(param = null) {
        return DateImmutable.isValid(param)
            ? new DateImmutable({ date: param })
            : new DateImmutable({ date: DateImmutable.today() });
    }

    getMedia(date) {
        this.setState({ loading: true });

        return nasa.getMedia(date)
            .then(media => { setTimeout(() => {
                this.setState({ media: media, loading: false });
            }, 1000)})
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
                {
                    this.state.loading === false
                        ?   <div className="content">
                                <Component data={ this.state.media } />
                            </div>
                        : null
                }
                <LoadingSpinner loading={ this.state.loading } />
            </section>
        );
	}
}

export default NasaApod;