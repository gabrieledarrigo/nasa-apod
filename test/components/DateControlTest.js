import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as Router from 'react-router';
import DateImmutable from '../../src/apod/models/DateImmutable';
import DateControl from '../../src/apod/components/DateControl';

describe('DateControlComponent', () => {
    let sandbox, component, node, event, pushFn;
    Router.browserHistory = { push: () => {}};

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        event  = { type : 'click' };
        pushFn = sandbox.stub(Router.browserHistory, 'push', url => {});
        component = TestUtils.renderIntoDocument(<DateControl />);
        node = ReactDOM.findDOMNode(component);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should render a date control element', () => {
        assert.equal(node.classList.contains('date-control'), true);
        assert.equal(node.querySelector('.date-control__title').textContent, 'Choose a date to browse more photos.');
    });

    it('should change the url with the related date when a user click on a day', () => {
        const day  = node.querySelector('.DayPicker-Day--today');

        TestUtils.Simulate.click(day, event);

        assert.equal(pushFn.callCount, 1);
        assert.equal(pushFn.calledWith(`/nasa-apod/date/${DateImmutable.format(DateImmutable.today())}`), true);
    });

    it('should not change the url with the related if the user click on a day that comes after today', () => {
        const disabled = node.querySelectorAll('.DayPicker-Day--isDisabled')[0];

        TestUtils.Simulate.click(disabled, event);
        assert.equal(pushFn.callCount, 0);
    });

    it('should show an error message if the user select a disabled day', () => {
        const disabled = node.querySelectorAll('.DayPicker-Day--isDisabled')[0];
        const errorMessage = node.querySelector('.error-message');

        TestUtils.Simulate.click(disabled, event);
        assert.equal(errorMessage.textContent, 'Date must be between Jun 16, 1995 and today.');
    });
});