import React from 'react';
import { shallow } from 'enzyme';
import MenuList from './MenuList';

describe('<MenuList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MenuList />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
