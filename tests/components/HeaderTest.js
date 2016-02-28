import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import emitter from '../../src/js/utils/event-emitter';
import Header from '../../src/js/components/Header';

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

        console.log('here');
        emitter.emit('date:change', new Date());
    });
});