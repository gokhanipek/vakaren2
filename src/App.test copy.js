import React from 'react';
import App from './components/App';
import { shallow } from 'enzyme';


describe('authenticate', () => {
  it('should render App component', () => {
    const component = shallow(<App/>);
  
    expect(component).toMatchSnapshot();
  });
});
