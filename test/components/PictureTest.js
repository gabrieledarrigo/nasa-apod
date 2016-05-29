import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Picture from '../../src/apod/components/Picture';

describe('PictureComponent', () => {
    it('should render a picture with a specific url', () => {
        const props = {
            url:'http://www.img.it'
        };

        const component = TestUtils.renderIntoDocument(<Picture data={ props }/>);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(node.querySelector('.picture__img').getAttribute('src'), props.url);
    });
});
