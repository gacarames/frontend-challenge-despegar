import React from 'react';
import ReactDOM from 'react-dom';
import SectionWrapper from './SectionWrapper';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SectionWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});