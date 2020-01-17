import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Tooltip />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
