import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import NavList from '../../components/NavList';

describe('NavListComponent', () => {
  it('should render an unordered list with one menu item', () => {
    const component = TestUtils.renderIntoDocument(
      <MemoryRouter>
        <NavList />
      </MemoryRouter>,
    );
    const node = ReactDOM.findDOMNode(component);

    assert.equal(node.classList.contains('nav-menu__list'), true);
    assert.equal(node.querySelectorAll('.nav-menu__list__item').length, 1);
  });

  it('should be open / closed depending on the open props value', () => {
    const open = TestUtils.renderIntoDocument(
      <MemoryRouter>
        <NavList open />
      </MemoryRouter>,
    );
    const closed = TestUtils.renderIntoDocument(
      <MemoryRouter>
        <NavList open={false} />
      </MemoryRouter>,
    );

    assert.equal((ReactDOM.findDOMNode(open)).classList.contains('is--open'), true);
    assert.equal((ReactDOM.findDOMNode(closed)).classList.contains('is--open'), false);
  });
});
