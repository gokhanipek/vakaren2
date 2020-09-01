import React from 'react';
import Home from './../../components/Home/Home';
import { shallow } from 'enzyme';


describe('Home component', () => {
  it('should render succesfully', () => {
    const component = shallow(<Home/>);
  
    expect(component).toMatchSnapshot();
  });
});
