import React from 'react';
import classNames from 'classnames';

const NavBtn = ({
  open,
}) => (
  // eslint-disable-next-line react/no-string-refs
  <div
    className="nav-menu__btn"
    // ref="navMenuBtn"
  >
    <span className={classNames('fa', { 'fa-close': open }, { 'fa-bars': !open })} />
  </div>
);

export default NavBtn;
