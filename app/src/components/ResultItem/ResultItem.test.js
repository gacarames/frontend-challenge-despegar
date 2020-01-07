import React from 'react';
import ReactDOM from 'react-dom';
import ResultItem from './ResultItem';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});