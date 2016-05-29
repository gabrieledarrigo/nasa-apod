import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SecondaryNav from '../../src/apod/components/SecondaryNav';

describe('SecondaryNavComponent', () => {
    let div, component, node;

    beforeEach(() => {
        // Render SecondaryNavComponent directly into DOM to test document.addEventListener
        div = document.createElement('div');
        div.setAttribute('id', 'placeholder');
        document.body.appendChild(div);

        component = ReactDOM.render(<SecondaryNav />, div);
        node = ReactDOM.findDOMNode(component);
    });

    afterEach(() => {
        document.body.removeChild(div);
    });

    it('should render a section with a button and a secondary navigation menu', () => {
        assert.equal(node.classList.contains('secondary-nav'), true);
        assert(node.querySelector('.contextual-menu'));
    });

    it('should open the menu when users clicks on .secondary-nav__control element', () => {
        assert.equal(node.querySelector('.secondary-nav__control').classList.contains('is-active'), false);
        assert.equal(node.querySelector('.contextual-menu').classList.contains('is-open'), false);

        // Use a real event.
        document.querySelector('.secondary-nav__control').click();

        assert.equal(node.querySelector('.secondary-nav__control').classList.contains('is-active'), true);
        assert.equal(node.querySelector('.contextual-menu').classList.contains('is-open'), true);
    });

    it('should close the menu when users clicks outside the .secondary-nav__control element', () => {
        document.querySelector('.secondary-nav__control').click();
        assert.equal(node.querySelector('.contextual-menu').classList.contains('is-open'), true);

        document.body.click();
        assert.equal(node.querySelector('.contextual-menu').classList.contains('is-open'), false);
    });
});