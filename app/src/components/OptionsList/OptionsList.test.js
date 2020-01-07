import React from 'react';
import ReactDOM from 'react-dom';
import OptionsList from './OptionsList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OptionsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});