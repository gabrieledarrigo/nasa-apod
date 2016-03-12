import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import emitter from '../../src/apod/events/event-emitter';
import DateControl from '../../src/apod/components/DateControl';

describe('DateControlComponent', () => {
    let sandbox, event, emitFn;

    beforeEach(() => {
        event  = { type : 'click' };
        sandbox = sinon.sandbox.create();
        emitFn = sandbox.stub(emitter, 'emit', (e, d) => {});
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should render a date control element', () => {
        const component = TestUtils.renderIntoDocument(<DateControl />);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(node.classList.contains('date-control'), true);
        assert.equal(node.querySelector('.date-control__title').textContent, 'Choose a date to browse more photos.');
    });

    it('should emit the related date when a user click on a day', () => {
        const component = TestUtils.renderIntoDocument(<DateControl />);
        const node = ReactDOM.findDOMNode(component);
        const day  = node.querySelector('.DayPicker-Day--today');

        TestUtils.Simulate.click(day, event);

        assert.equal(emitFn.callCount, 1);
        assert.equal(emitFn.calledWith('date:change'), true);
    });

    it('should not emit the date:change event if the user click on a day that comes after today', () => {
        const component = TestUtils.renderIntoDocument(<DateControl />);
        const node = ReactDOM.findDOMNode(component);
        const disabled = node.querySelectorAll('.DayPicker-Day--isDisabled')[0];

        TestUtils.Simulate.click(disabled, event);

        assert.equal(emitFn.callCount, 0);
    });
});