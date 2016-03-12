import React from 'react';
import FigCaption from './FigCaption';

class Video extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className="video">
                <div className="picture__content">
                    <iframe className="video__iframe"
                            src={ this.props.data.url }
                            frameBorder="0"
                            allowFullScreen="true">
                    </iframe>
                </div>

                <FigCaption title={this.props.data.title} explanation={this.props.data.explanation} />
            </figure>
        );
    }
}

export default Video;