import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Header from '../../src/components/Header';

describe('HeaderComponent', () => {
  let sandbox; let component; let
    node;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    component = TestUtils.renderIntoDocument(<Header />);
    node = ReactDOM.findDOMNode(component);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render a header element', () => {
    assert.equal(node.getAttribute('id'), 'header');
  });

  it('should open / close when user click one of ["nav-menu__btn", "nav-menu__list", "DayPicker-Day"] element', () => {
    const event = { type: 'click' };

    TestUtils.Simulate.click(node.querySelector('.nav-menu__btn'), event);
    assert.equal(component.state.open, true);

    TestUtils.Simulate.click(node.querySelector('.nav-menu__list'), event);
    assert.equal(component.state.open, false);

    TestUtils.Simulate.click(node.querySelector('.DayPicker-Day'), event);
    assert.equal(component.state.open, true);
  });
});
