import React from 'react';
import ReactDOM from 'react-dom';
import DetailProduct from './DetailProduct';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailProduct />, div);
  ReactDOM.unmountComponentAtNode(div);
});