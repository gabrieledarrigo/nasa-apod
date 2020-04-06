import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import * as Router from 'react-router-dom';
import Header from '../../components/Header';

describe('HeaderComponent', () => {
  let sandbox; let component; let
    node;

  beforeEach(() => {
    sandbox = sinon.createSandbox();


    sinon.stub(Router, 'withRouter').callsFake((comp) => comp);

    component = TestUtils.renderIntoDocument(
      <Router.MemoryRouter>
        <Header />,
      </Router.MemoryRouter>,
    );

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
    const header = TestUtils.findRenderedComponentWithType(component, Header);

    TestUtils.Simulate.click(node.querySelector('.nav-menu__btn'), event);
    assert.equal(header.state.open, true);

    TestUtils.Simulate.click(node.querySelector('.nav-menu__list'), event);
    assert.equal(header.state.open, false);

    TestUtils.Simulate.click(node.querySelector('.DayPicker-Day'), event);
    assert.equal(header.state.open, true);
  });
});
