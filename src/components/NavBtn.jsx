/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classNames from 'classnames';

class NavBtn extends React.Component {
  render() {
    const { open } = this.props;

    return (
      <div className="nav-menu__btn">
        <span className={classNames('fa', { 'fa-close': open }, { 'fa-bars': !open })} />
      </div>
    );
  }
}

export default NavBtn;
