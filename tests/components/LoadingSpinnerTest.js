import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import LoadingSpinner from '../../src/apod/components/LoadingSpinner';

describe('LoadingSpinner', () => {
    it('should show a loading spinner when loading prop is true', () => {
        const component = TestUtils.renderIntoDocument(<LoadingSpinner loading={ true }/>);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(node.classList.contains('is-visible'), true);
    });
});