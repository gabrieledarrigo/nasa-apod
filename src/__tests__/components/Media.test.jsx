import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Media from '../../components/Media';

describe('MediaComponent', () => {
  it('should render a Media component', () => {
    const component = TestUtils.renderIntoDocument(<Media />);
    const node = ReactDOM.findDOMNode(component);

    assert.equal(node.classList.contains('media'), true);
  });

  it('should mutually render and image if mediaType prop is "image"', () => {
    const props = {
      url: 'http://placehold.it/100x100',
      title: 'Lorem Ipsum',
      media_type: 'image',
    };

    const component = TestUtils.renderIntoDocument(<Media media={props} />);
    const node = ReactDOM.findDOMNode(component);

    assert(node.querySelector('.media__content'));
    assert.equal(node.querySelector('.media__img').getAttribute('src'), props.url);
    assert.equal(node.querySelector('.media__img').getAttribute('title'), props.title);
    assert.equal(node.querySelector('.media__frame'), null);
  });

  it('should mutually render an iframe if mediaType prop is "video"', () => {
    const props = {
      url: 'http://placehold.it/100x100',
      title: 'Lorem Ipsum',
      media_type: 'video',
    };

    const component = TestUtils.renderIntoDocument(<Media media={props} />);
    const node = ReactDOM.findDOMNode(component);

    assert(node.querySelector('.media__content'));
    assert.equal(node.querySelector('.media__frame').getAttribute('src'), props.url);
    assert.equal(node.querySelector('.media__image'), null);
  });
});
