import React from 'react';
import RegForm from './reg-data-form';
import { shallow } from 'enzyme';

describe('Registration form', () => {
  const wrapper = shallow(<RegForm />);

  it('renders without crashing', () => {
    expect(wrapper.toBeDefined);
  });

  it('should have at least 3 input fields and 1 button', () => {
    expect(wrapper.find('FormInput').length).toBeGreaterThanOrEqual(3);
    expect(wrapper.find('Button')).toBeDefined;
  });
});
