/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import NavBtn from './NavBtn';
import NavList from './NavList';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggle = (e) => {
    // eslint-disable-next-line consistent-return
    ['nav-menu__btn', 'nav-menu__list', 'DayPicker-Day'].forEach((className) => {
      if (e.target.classList.contains(className)) {
        return this.setState((state) => ({
          open: !state.open,
        }));
      }
    });
  }

  render() {
    const { open } = this.state;

    return (
      <header id="header">
        <Link to="/" className="logo" />

        <nav className="nav-menu" onClick={this.toggle}>
          <NavBtn open={open} />
          <NavList open={open} />
        </nav>
      </header>
    );
  }
}

export default Header;
