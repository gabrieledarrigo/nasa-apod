import React from 'react';

export const NavBtn = React.createClass({
    render() {
        return(
            <div className="nav-menu__btn" onClick={ this.props.toggle }>
                <span className={ this.props.open ? 'fa fa-close' : 'fa fa-bars' }></span>
            </div>
        );        
    }
});