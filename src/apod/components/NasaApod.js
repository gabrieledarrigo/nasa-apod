import React from 'react';
import nasa from '../services/nasa';
import DateImmutable from '../models/DateImmutable';
import Header from './Header';
import Media from './Media';
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
            .then(media => {
                setTimeout(() => {
                    this.setState({ media: media, loading: false });
                }, 0)})
            .catch(err => console.err(err));
    }

	render() {
        return (
            <section id="nasa-apod">
                <Header />
                {
                    this.state.loading === false
                        ?   <div className="content">
                                <Media media={ this.state.media } />
                            </div>
                        : null
                }

                <LoadingSpinner loading={ this.state.loading } />
            </section>
        );
	}
}

export default NasaApod;