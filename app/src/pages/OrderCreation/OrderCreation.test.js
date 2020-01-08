import React from 'react';
import { shallow } from 'enzyme';
import OrderCreation from './OrderCreation';

describe('<OrderCreation />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<OrderCreation />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
