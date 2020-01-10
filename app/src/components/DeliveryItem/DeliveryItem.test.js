import React from 'react';
import { shallow } from 'enzyme';
import DeliveryItem from './DeliveryItem';

describe('<DeliveryItem />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DeliveryItem />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
