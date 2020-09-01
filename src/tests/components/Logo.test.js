import React from 'react';
import Logo from './../../components/Logo/Logo';
import { shallow } from 'enzyme';


describe('logo', () => {
  it('should render Logo component', () => {
    const component = shallow(<Logo/>);
  
    expect(component).toMatchSnapshot();
  });
});
