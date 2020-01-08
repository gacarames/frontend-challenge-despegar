import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './MenuItem';

describe('<MenuItem />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MenuItem />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
