import React from 'react';
import Authenticate from './../../components/Authenticate/Authenticate';
import { shallow } from 'enzyme';


describe('authenticate', () => {
  it('should render authenticate component', () => {
    const component = shallow(<Authenticate/>);
  
    expect(component).toMatchSnapshot();
  });
});
