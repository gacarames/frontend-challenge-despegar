import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './InputForm';

describe('<InputForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InputForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
