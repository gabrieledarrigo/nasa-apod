import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ShareURIs from '../../src/apod/models/ShareURIs';
import ShareButtons from '../../src/apod/components/ShareButtons';

describe('ShareButtons', () => {
    let sandbox, component, node, openFn, text = 'Share this';

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        openFn = sandbox.stub(window, 'open');

        component = TestUtils.renderIntoDocument(<ShareButtons text={ text } href={ window.location.href } />);
        node = ReactDOM.findDOMNode(component);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should render three share buttons', () => {
        assert.equal(node.classList.contains('share-buttons'), true);
        assert.equal(node.querySelectorAll('.share-buttons__element').length, 3);
    });

    it('should open a popup window with the right share url', () => {
        const Map = ShareURIs.getURIMap();

        TestUtils.Simulate.click(node.querySelector('.share-buttons__element--facebook'));
        assert.equal(openFn.callCount, 1);
        assert.equal(openFn.calledWith(`${Map.get('facebook')}${window.location.href}`, 'Nasa APOD - Gabriele D\'Arrigo'), true);

        TestUtils.Simulate.click(node.querySelector('.share-buttons__element--twitter'));
        assert.equal(openFn.callCount, 2);
        assert.equal(openFn.calledWith(`${Map.get('twitter')}${text}`, 'Nasa APOD - Gabriele D\'Arrigo'), true);

        TestUtils.Simulate.click(node.querySelector('.share-buttons__element--google-plus'));
        assert.equal(openFn.callCount, 3);
        assert.equal(openFn.calledWith(`${Map.get('google-plus')}${window.location.href}`, 'Nasa APOD - Gabriele D\'Arrigo'), true);
    });
});