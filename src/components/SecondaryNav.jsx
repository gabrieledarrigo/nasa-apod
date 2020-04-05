/* eslint-disable react/no-string-refs */
import React from 'react';
import classNames from 'classnames';
import ShareButtons from './ShareButtons';

class SecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.contextualMenu = React.createRef();
    this.showContextualMenu = this.showContextualMenu.bind(this);
  }

  componentDidMount() {
    window.document.body.addEventListener('click', this.showContextualMenu);
  }

  componentWillUnmount() {
    window.document.body.removeEventListener('click', this.showContextualMenu);
  }

  // eslint-disable-next-line consistent-return
  showContextualMenu(e) {
    const { open } = this.state;

    if (e.target.matches('.secondary-nav__control')) {
      return this.setState((state) => ({ open: !state.open }));
    }

    // eslint-disable-next-line react/no-string-refs
    if (open && !this.contextualMenu.contains(e.target)) {
      return this.setState(() => ({ open: false }));
    }
  }

  render() {
    const { open } = this.state;
    const { text } = this.props;

    return (
      <section className="secondary-nav">
        <div className={classNames('btn btn--square secondary-nav__control', { 'is-active': open })}>
          <span className="fa fa-ellipsis-v" />
        </div>

        <nav className={classNames('contextual-menu', { 'is-open': open })} ref={this.contextualMenu}>
          <h5 className="share-buttons__title">
            Share
          </h5>

          <ul className="contextual-menu__list">
            <li className="contextual-menu__list__item">
              <ShareButtons href={window.location.href} text={text} />
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default SecondaryNav;
