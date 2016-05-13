import React from 'react';
import FigCaption from './FigCaption';

class Picture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className="picture">
                <div className="picture__content">
                    <img src={this.props.data.url} title={this.props.data.title} className="picture__img" />
                </div>

                <div className="btn secondary-nav__control" onClick={(e) => { e.target.classList.toggle('is-active')}}>
                    <span className="fa fa-ellipsis-v"></span>
                    <nav>
                        <ul>

                        </ul>
                    </nav>

                </div>

                <FigCaption title={this.props.data.title} explanation={this.props.data.explanation} />
            </figure>
        );
    }
}

export default Picture;
