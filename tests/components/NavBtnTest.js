import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import NavBtn from '../../src/js/components/NavBtn';

describe('NavBtnComponent', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should render a button element', () => {
        const component = TestUtils.renderIntoDocument(<NavBtn />);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(node.classList.contains('nav-menu__btn'), true);
    });

    it('should invoke a toggle method props when a user click the element', () => {
        const toggle = sandbox.spy(() => {});
        const event  = { type : 'click' };
        const component = TestUtils.renderIntoDocument(<NavBtn toggle={ toggle }/>);
        const node = ReactDOM.findDOMNode(component);

        TestUtils.Simulate.click(node, event);

        assert.equal(toggle.callCount, 1);
    });

    it('should show a different icon if the navigation menu is open / closed', () => {
        const open = TestUtils.renderIntoDocument(<NavBtn open={ true } />);
        const closed = TestUtils.renderIntoDocument(<NavBtn open={ false } />);

        assert.equal(
            ReactDOM.findDOMNode(open).querySelector('.fa').classList.contains('fa-close'),
            true
        );

        assert.equal(
            ReactDOM.findDOMNode(closed).querySelector('.fa').classList.contains('fa-bars'),
            true
        );
    });
});
