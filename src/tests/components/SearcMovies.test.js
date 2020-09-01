import React from 'react';
import SearcMovies from './../../components/SearchMovies/SearchMovies';
import { shallow } from 'enzyme';


describe('Search movies component', () => {
  it('should render succesfully', () => {
    const component = shallow(<SearcMovies/>);
  
    expect(component).toMatchSnapshot();
  });
});
