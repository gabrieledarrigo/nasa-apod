import React from 'react';

export const Picture = React.createClass({
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

                        <h5 className="description">
                            {this.props.data.explanation}
                        </h5>
                    </figcaption>
                </figure>
            </div>
        );
    }
});