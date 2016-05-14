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
                    <div></div>
                </div>

                <section className="secondary-nav">
                    <div className="btn btn--square secondary-nav__control" onClick={(e) => { e.target.classList.toggle('is-active')}}>
                        <span className="fa fa-ellipsis-v"></span>
                    </div>

                    <nav className="contextual-menu">
                        <ul className="contextual-menu__list">
                            <li className="contextual-menu__list__item">
                                <div className="share-buttons">
                                    <div className="btn share-buttons__element share-buttons__element--facebook">
                                        <span className="fa fa-facebook"></span>
                                    </div>

                                    <div className="btn share-buttons__element share-buttons__element--twitter">
                                        <span className="fa fa-twitter"></span>
                                    </div>

                                    <div className="btn share-buttons__element share-buttons__element--google-pulse">
                                        <span className="fa fa-google-plus"></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </section>

                <FigCaption title={this.props.data.title} explanation={this.props.data.explanation} />
            </figure>
        );
    }
}

export default Picture;
