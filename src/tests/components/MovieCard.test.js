import React from 'react';
import MovieCard from './../../components/MovieCard/MovieCard';
import { shallow } from 'enzyme';


describe('Movie card component', () => {
  it('should render succesfully', () => {
    const component = shallow(<MovieCard/>);
  
    expect(component).toMatchSnapshot();
  });
});
