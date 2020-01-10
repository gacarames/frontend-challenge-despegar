import React from 'react';
import { shallow } from 'enzyme';
import DeliveryList from './DeliveryList';

describe('<DeliveryList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DeliveryList />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
