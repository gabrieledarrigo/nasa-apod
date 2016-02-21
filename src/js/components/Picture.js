import React from 'react';

class Picture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <figure className="picture">
                    <div className="picture__content">
                        <img src={this.props.data.url} title={this.props.data.title} className="picture__img" />
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
            </div>
        );
    }
}

export default Picture;
