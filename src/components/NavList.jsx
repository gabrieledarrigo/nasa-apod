import React from 'react';
import DateControl from './DateControl';

const NavList = ({
  open,
}) => (
  <ul className={open ? 'nav-menu__list is--open' : 'nav-menu__list'}>
    <li className="nav-menu__list__item">
      <DateControl />
    </li>
  </ul>
);

NavList.defaultProps = {
  open: false,
};

export default NavList;
