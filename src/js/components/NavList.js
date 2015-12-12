import React from 'react';
import { DateControl } from './DateControl';

export const NavList = React.createClass({
    render() {
        return (
            <ul className={this.props.open ? 'nav-menu__list is--open' : 'nav-menu__list'}>
                <li className="nav-menu__list__item">
                    <DateControl />
                </li>
            </ul>
        );    
    }
});  