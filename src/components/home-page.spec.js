import React from 'react';
import HomePage from './home-page';
import { shallow } from 'enzyme';

describe('HomePage component testing', () => {
  const wrapper = shallow(<HomePage />);

  it('should render', () => {
    expect(wrapper).toBeDefined;
  });

  it('should contain Hello World', () => {
    expect(wrapper.contains(<p>Hello world</p>)).toBe(true);
  });

  it('should contain Embed', () => {
    expect(wrapper.find('Embed')).toBeDefined;
  });
});
