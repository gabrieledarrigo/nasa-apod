import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import NavBtn from '../../src/components/NavBtn';

describe('NavBtnComponent', () => {
  it('should render a button element', () => {
    const component = TestUtils.renderIntoDocument(<NavBtn />);
    const node = ReactDOM.findDOMNode(component);

    assert.equal(node.classList.contains('nav-menu__btn'), true);
  });

  it('should show a different icon if the navigation menu is open / closed', () => {
    const open = TestUtils.renderIntoDocument(<NavBtn open />);
    const closed = TestUtils.renderIntoDocument(<NavBtn open={false} />);

    assert.equal(
      ReactDOM.findDOMNode(open).querySelector('.fa').classList.contains('fa-close'),
      true,
    );

    assert.equal(
      ReactDOM.findDOMNode(closed).querySelector('.fa').classList.contains('fa-bars'),
      true,
    );
  });
});
