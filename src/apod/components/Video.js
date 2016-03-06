import React from 'react';

class Video extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className="video">
                <div className="picture__content">
                    <iframe className="video__iframe" width="960" height="540"
                            src={ this.props.data.url }
                            frameBorder="0"
                            allowFullScreen="true">
                    </iframe>
                </div>

                <figcaption>
                    <h4 className="title">
                        {this.props.data.title}
                    </h4>

                    <h5 className="explanation">
                        {this.props.data.explanation}
                    </h5>
                </figcaption>
            </figure>
        );
    }
}

export default Video;