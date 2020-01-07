import React from 'react';
import ReactDOM from 'react-dom';
import Shipping from './Shipping';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shipping />, div);
  ReactDOM.unmountComponentAtNode(div);
});