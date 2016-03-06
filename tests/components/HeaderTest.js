import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import emitter from '../../src/apod/utils/event-emitter';
import Header from '../../src/apod/components/Header';

describe('HeaderComponent', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should render a header element', () => {
        const component = TestUtils.renderIntoDocument(<Header />);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(node.getAttribute('id'), 'header');
    });

    it('should invoke toggle method when receiving a date:change event', () => {
        const component = TestUtils.renderIntoDocument(<Header />);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(component.state.open, false);
        emitter.emit('date:change', new Date());
        assert.equal(component.state.open, true);
    });
});