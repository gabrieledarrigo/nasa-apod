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
      loading: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;

    return this.getMedia(
      this.computeDateParam(match.params?.date ?? null),
    );
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { date } = match.params;

    if (prevProps.match.params?.date === date) {
      return false;
    }

    return this.getMedia(
      this.computeDateParam(date),
    );
  }

  getMedia(date) {
    this.setState({ loading: true });

    return nasa.getMedia(date)
      .then((media) => {
        this.setState(() => ({
          media,
          loading: false,
        }));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.err(err));
  }

  // eslint-disable-next-line class-methods-use-this
  computeDateParam(param = null) {
    return DateImmutable.isValid(param)
      ? new DateImmutable({ date: param })
      : new DateImmutable({ date: DateImmutable.today() });
  }

  render() {
    const { loading, media } = this.state;

    return (
      <section id="nasa-apod">
        <Header />
        <LoadingSpinner loading={loading} />

        {media && (
          <div className="content">
            <Media media={media} />
          </div>
        )}
      </section>
    );
  }
}

export default NasaApod;
