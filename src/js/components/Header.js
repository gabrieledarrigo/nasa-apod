import React from 'react';
import emitter from '../utils/event-emitter';
import { NavBtn } from './NavBtn';
import { NavList } from './NavList';

export const Header = React.createClass({
    getInitialState() {
        return {
            open: false
        };
    },
    componentDidMount() {
        emitter.addListener('date:change', this.toggle);
    },
    toggle() {
        this.setState({
            open: !this.state.open
        });
    },
    render() {
        return(
            <div id="header">
                <h1 className="logo"></h1>

                <nav className="nav-menu">
                    <NavBtn open={ this.state.open } toggle={ this.toggle } />
                    <NavList open={ this.state.open } />
                </nav>
            </div>
        );  
    }
});
