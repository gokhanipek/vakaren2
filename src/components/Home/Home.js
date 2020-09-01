import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { resetSearchResults, getAuthTokenAction, getPopularMoviesAction, requestSessionId, getAccountDetails } from "../../store/actions";
import SearchMovies from '../SearchMovies/SearchMovies';
import Logo from './../Logo/Logo'; 
import './Home.scss';
import Authenticate from "../Authenticate/Authenticate";
import Contact from "../Contact/Contact";

const Home = ({getAuthTokenAction, location, searchResults, requestSessionId, resetSearchResults}) => {
  useEffect(() => {
    const isAuthenticated = location.search.includes('approved=true')
    const {request_token} = isAuthenticated ? authorizedToken() : {};
    requestSessionId(request_token);

    /* eslint-disable */
  }, [])

  const isAuthenticated = JSON.parse(localStorage.getItem('vakaren_session_id'));


  const authorizedToken = () => {
    if(location.search === '') return null;
    const params = location.search.substring(1).split('&');
    const paramsObject = {};
    
    params.map(param => {
      const [key, value] = param.split('=');
      paramsObject[key] = value;
    })

    return paramsObject;
  }


  const onClickHandler = () => {
    return isAuthenticated ? null : getAuthTokenAction();
  }

  const onLogoClickHandler = () => {
    return resetSearchResults();
  }


  return (
    <div className="container">
      <div className={`home-wrapper ${searchResults.length > 0 ? 'top' : 'bottom'}`}>
          <Authenticate isAuthenticated={isAuthenticated} onClickHandler={onClickHandler} />
          <Logo onClickHandler={onLogoClickHandler}/>
          <SearchMovies/>
          <Contact/>
      </div>
    </div>
    )
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAuthTokenAction, getPopularMoviesAction, requestSessionId, getAccountDetails, resetSearchResults }, dispatch);

const mapStateToProps = state => ({ 
    searchResults: state.data.searchResults.results || [] 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
