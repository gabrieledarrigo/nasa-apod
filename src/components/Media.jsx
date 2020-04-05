import React from 'react';
import FigCaption from './FigCaption';
import SecondaryNav from './SecondaryNav';

const Media = ({
  media,
}) => (
  <figure className="media">
    <div className="media__content">
      { media.media_type === 'video'
        ? (
          <div className="media__frame__wrapper">
            <iframe title="video" className="media__frame" src={media.url} frameBorder="0" allowFullScreen="true" />
          </div>
        )
        : (
          <div className="media__image__wrapper">
            <img src={media.url} title={media.title} alt={media.title} className="media__img" />
          </div>
        )}
    </div>
    <SecondaryNav text={media.title} />
    <FigCaption title={media.title} explanation={media.explanation} />
  </figure>
);

Media.defaultProps = {
  media: {
    title: '',
    explanation: '',
    url: '',
    media_type: 'image',
  },
};

export default Media;
