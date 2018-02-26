import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './home-page';
import { shallow, mount, render } from 'enzyme';
import Embed from 'semantic-ui-react';

describe('HomePage component testing', () => {
  const wrapper = shallow(<HomePage />);
  it('should render', () => {
    expect(wrapper).toBeDefined;
  });
});
