import React from 'react';
import { shallow } from 'enzyme';
import DeliverySelection from './DeliverySelection';

describe('<DeliverySelection />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DeliverySelection />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
