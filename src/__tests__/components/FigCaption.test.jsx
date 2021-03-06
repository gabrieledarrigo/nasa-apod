import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import FigCaption from '../../components/FigCaption';

describe('FigCaptionComponent', () => {
  it('should render a figcaption element with a title and an explanation', () => {
    const props = {
      title: 'Title',
      explanation: 'Explanation',
    };

    const component = TestUtils.renderIntoDocument(<FigCaption {...props} />);
    const node = ReactDOM.findDOMNode(component);

    assert.equal(node.classList.contains('figcaption'), true);
    assert.equal(node.querySelector('.title').textContent, props.title);
    assert.equal(node.querySelector('.explanation').textContent, props.explanation);
  });
});
