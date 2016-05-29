import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Video from '../../src/apod/components/Video';

describe('VideoComponent', () => {
    it('should render a video with a specific src url', () => {
        const props = {
            url:'http://www.img.it'
        };

        const component = TestUtils.renderIntoDocument(<Video data={ props }/>);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(node.querySelector('.video__iframe').getAttribute('src'), props.url);
    });
});
