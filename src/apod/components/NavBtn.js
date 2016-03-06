import React from 'react';

class NavBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="nav-menu__btn" onClick={ this.props.toggle }>
                <span className={ this.props.open ? 'fa fa-close' : 'fa fa-bars' }></span>
            </div>
        );
    }
}

export default NavBtn;