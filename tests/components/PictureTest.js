import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Picture from '../../src/js/components/Picture';

describe('PictureComponent', () => {
    it('should render a picture with a title and an explanation', () => {
        const props = {
            url:'http://www.img.it',
            title: 'Title',
            explanation: 'Explanation'
        };

        const component = TestUtils.renderIntoDocument(<Picture data={ props }/>);
        const node = ReactDOM.findDOMNode(component);

        assert.equal(node.querySelector('.picture__img').getAttribute('src'), props.url);
        assert.equal(node.querySelector('.title').textContent, props.title);
        assert.equal(node.querySelector('.explanation').textContent, props.explanation);
    });
});
