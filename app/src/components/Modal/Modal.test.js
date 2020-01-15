import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Modal />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
