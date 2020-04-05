import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ErrorMessage from '../../src/components/ErrorMessage';

describe('ErrorMessageComponent', () => {
  it('should render an heading element with the specified error text', () => {
    const props = {
      show: true,
      text: 'This is an error',
    };

    const component = TestUtils.renderIntoDocument(<ErrorMessage {...props} />);
    const node = ReactDOM.findDOMNode(component);

    assert.equal(node.classList.contains('error-message'), true);
    assert.equal(node.textContent, props.text);
  });

  it('should not show the error if show prop is falsy', () => {
    const props = {
      show: false,
      text: 'This is an error',
    };

    const component = TestUtils.renderIntoDocument(<ErrorMessage {...props} />);
    const node = ReactDOM.findDOMNode(component);

    assert.equal(node.classList.contains('hidden'), true);
  });
});
