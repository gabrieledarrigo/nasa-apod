import React from 'react';
import classNames from 'classnames';

class NavBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="nav-menu__btn" ref="navMenuBtn">
                <span className={classNames('fa', { 'fa-close': this.props.open}, {'fa-bars': !this.props.open })}></span>
            </div>
        );
    }
}

export default NavBtn;