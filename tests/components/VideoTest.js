import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Video from '../../src/apod/components/Video';

describe('VideoComponent', () => {
    it('should render a video with a title and an explanation', () => {
        const props = {
            url:'http://www.img.it',
            title: 'Title',
            explanation: 'Explanation'
        };

        const component = TestUtils.renderIntoDocument(<Video data={ props }/>);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(node.querySelector('.video__iframe').getAttribute('src'), props.url);
        assert.equal(node.querySelector('.title').textContent, props.title);
        assert.equal(node.querySelector('.explanation').textContent, props.explanation);
    });
});
