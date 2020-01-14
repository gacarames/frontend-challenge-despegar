import React from 'react';
import { shallow } from 'enzyme';
import DeliveryForm from './DeliveryForm';

describe('<DeliveryForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DeliveryForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
