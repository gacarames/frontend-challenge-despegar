import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thumbnail />, div);
  ReactDOM.unmountComponentAtNode(div);
});