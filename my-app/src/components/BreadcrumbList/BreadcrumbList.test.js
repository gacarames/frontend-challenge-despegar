import React from 'react';
import ReactDOM from 'react-dom';
import BreadcrumbList from './BreadcrumbList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BreadcrumbList />, div);
  ReactDOM.unmountComponentAtNode(div);
});