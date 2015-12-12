import React from 'react';
import { NavBtn } from './NavBtn';
import { NavList } from './NavList';

export const NavMenu = React.createClass({
    getInitialState() {
        return {
            open: false
        };
    },
    toggle() {
        this.setState({
            open: !this.state.open
        });
    },
    render() {
        return(
            <div id="header">
                <nav className="nav-menu">
                    <NavBtn open={this.state.open} toggle={this.toggle} />
                    <NavList open={this.state.open} />
                </nav>
            </div>
        );  
    }
});
