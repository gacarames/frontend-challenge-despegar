import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultsList from './SearchResultsList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResultsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});