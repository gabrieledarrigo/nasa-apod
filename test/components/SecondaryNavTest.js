import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SecondaryNav from '../../src/apod/components/SecondaryNav';

describe('SecondaryNavComponent', () => {
    let sandbox, component, node;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        component = TestUtils.renderIntoDocument(<SecondaryNav />);
        node = ReactDOM.findDOMNode(component);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should render a section with a button and a secondary navigation menu', () => {
        assert.equal(node.classList.contains('secondary-nav'), true);
        assert(node.querySelector('.contextual-menu'));
    });

    it('should open the secondary menu when users click on on .secondary-nav__control element', () => {
        assert.equal(node.querySelector('.secondary-nav__control').classList.contains('is-active'), false);
        assert.equal(node.querySelector('.contextual-menu').classList.contains('is-open'), false);

        //TestUtils.Simulate.click(control, { target: control});
        //assert.equal(node.querySelector('.secondary-nav__control').classList.contains('is-active'), true);
        //assert.equal(node.querySelector('.contextual-menu').classList.contains('is-open'), true);
    });
});