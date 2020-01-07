import React from 'react';
import ReactDOM from 'react-dom';
import GoBack from './GoBack';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoBack />, div);
  ReactDOM.unmountComponentAtNode(div);
});