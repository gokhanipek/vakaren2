import React from 'react';
import MoviePage from './../../components/MoviePage/MoviePage';
import { shallow } from 'enzyme';


describe('MoviePage component', () => {
  it('should render succesfully', () => {
    const component = shallow(<MoviePage/>);
  
    expect(component).toMatchSnapshot();
  });
});
