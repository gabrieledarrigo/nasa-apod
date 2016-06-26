import React from 'react';
import FigCaption from './FigCaption';
import SecondaryNav from './SecondaryNav';

class Media extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { media } = this.props;

        return (
            <figure className="media">
                <div className="media__content">
                    {   media.media_type === 'video'
                            ?
                            <div className="media__frame__wrapper">
                                <iframe className="media__frame" src={ media.url } frameBorder="0" allowFullScreen="true"></iframe>
                            </div>
                            :
                            <div className="media__image__wrapper">
                                <img src={media.url} title={media.title} className="media__img" />
                            </div>
                    }
                </div>
                <SecondaryNav text={media.title}/>
                <FigCaption title={media.title} explanation={media.explanation} />
            </figure>
        );
    }
}

Media.defaultProps = {
    media: {
        title: '',
        explanation: '',
        url: '',
        media_type: 'image'
    }
};

export default Media;
