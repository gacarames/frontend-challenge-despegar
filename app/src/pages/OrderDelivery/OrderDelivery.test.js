import React from 'react';
import { shallow } from 'enzyme';
import OrderDelivery from './OrderDelivery';

describe('<OrderDelivery />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<OrderDelivery />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
