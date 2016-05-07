import React from 'react';
import { Link } from 'react-router';
import NavBtn from './NavBtn';
import NavList from './NavList';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    toggle(e) {
        ['nav-menu__btn', 'nav-menu__list', 'DayPicker-Day'].forEach(className => {
            if (e.target.classList.contains(className)) {
                return this.setState({
                    open: !this.state.open
                });
            }
        });
    }

    render() {
        return(
            <header id="header">
                <Link to="/" className="logo" />

                <nav className="nav-menu" onClick={ this.toggle.bind(this) }>
                    <NavBtn open={ this.state.open } />
                    <NavList open={ this.state.open } />
                </nav>
            </header>
        );  
    }
}

export default Header;