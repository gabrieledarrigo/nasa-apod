import React from 'react';
import emitter from '../events/event-emitter';
import NavBtn from './NavBtn';
import NavList from './NavList';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
    }

    componentDidMount() {
        emitter.addListener('date:change', this.toggle.bind(this));
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return(
            <header id="header">
                <h1 className="logo"></h1>

                <nav className="nav-menu">
                    <NavBtn open={ this.state.open } toggle={ this.toggle.bind(this) } />
                    <NavList open={ this.state.open } />
                </nav>
            </header>
        );  
    }
}

export default Header;