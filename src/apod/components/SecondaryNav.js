import React from 'react';

class SecondaryNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.showContextualMenu = this.showContextualMenu.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.showContextualMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.showContextualMenu);
    }

    showContextualMenu(e) {
        console.log('clicked');
        console.log(e.target);


        if (e.target.matches('.secondary-nav__control')) {
            return this.setState({open: !this.state.open});
        }

        if (this.state.open && !this.refs.contextualMenu.contains(e.target)) {
            return this.setState({open: false});
        }
    }

    render() {
        return (
            <section className="secondary-nav">
                <div className={this.state.open ? 'btn btn--square secondary-nav__control is-active' : 'btn btn--square secondary-nav__control'}>
                    <span className="fa fa-ellipsis-v"></span>
                </div>

                <nav className={this.state.open ? 'contextual-menu is-open' : 'contextual-menu'} ref="contextualMenu">
                    <h5 className="share-buttons__title">
                        Share
                    </h5>

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
        );
    }
}

export default SecondaryNav;