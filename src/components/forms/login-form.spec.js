import React from 'react';
import LoginForm from './login-form';
import { shallow } from 'enzyme';

describe('Login form', () => {
  const wrapper = shallow(<LoginForm />);

  it('renders without crashing', () => {
    expect(wrapper.toBeDefined);
  });

  it('should have 2 input fields and 1 button', () => {
    expect(wrapper.find('FormInput')).toHaveLength(2);
    expect(wrapper.find('Button')).toBeDefined;
  });

  it('password field should hide input value', () => {
    expect(
      wrapper
        .find('FormInput')
        .at(1)
        .props().type
    ).toBe('password');
  });

  it('should correctly get values from state', () => {
    const testLoginData = {
      username: 'test_username',
      password: 'test_password'
    };
    wrapper.setState({
      username: testLoginData.username,
      password: testLoginData.password
    });
    expect(
      wrapper
        .find('FormInput')
        .at(0)
        .props().value
    ).toBe(testLoginData.username);
    expect(
      wrapper
        .find('FormInput')
        .at(1)
        .props().value
    ).toBe(testLoginData.password);
  });
});
