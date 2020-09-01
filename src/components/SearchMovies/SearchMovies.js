import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { get } from 'lodash';
import { 
    requestSearchResultAction,
    requestLatestMovieSearch,
    getAccountDetails,
    getFavList,
    getWatchList,
    resetSearchResults
} from "../../store/actions";
import MovieCard from '../MovieCard/MovieCard';
import './SearchMovies.scss';

const SearchMovies = ({
    history,
    accountDetails,
    requestSearchResultAction,
    requestLatestMovieSearch,
    searchResults,
    getFavList,
    getWatchList,
    getAccountDetails,
    latestMovieResultId,
    resetSearchResults,
    userFavList,
    userWatchList
}) => {

    const [ searchTerm, setSearchTerm ] = useState('');

    const vakaren_session_id = JSON.parse(localStorage.getItem('vakaren_session_id'));

    useEffect(() => {
        vakaren_session_id && getAccountDetails();
        requestLatestMovieSearch();
        return () => {
            resetSearchResults();            
          };
          /* eslint-disable */
    }, []);

    useEffect(() => {
        vakaren_session_id && getFavList(accountDetails.id, 'favorite');
        vakaren_session_id && getWatchList(accountDetails.id, 'watchlist');
    }, []);
    
    const handleSubmit = event => {
        event.preventDefault();
        const query = encodeURIComponent(searchTerm.trim());
        if (query === '') return;
        requestSearchResultAction(query, 1);
    }

    const onClickRandomMovieHandler = () => {
        const getRandomMovie = Math.floor(Math.random() * latestMovieResultId) + 1 
        history.push(`/movie/${getRandomMovie}`)
    } 

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const userListResultsExists = userFavList.length > 0 && userWatchList.length > 0;
    const searchResultsExists = searchResults && searchResults.length > 0;

    return (
        <>
            <div className="input-field col s12 searchbar">
            <form data-test="component-search-form" onSubmit={handleSubmit}>

                <input placeholder="Type a movie name...." id="search" type="text" className="validate"  onChange={handleChange}/>
                <div className="buttons-container">
                    <button type="submit" className="waves-effect waves-light btn light-blue">
                        Search
                    </button>            
                    <span type="submit" className="waves-effect waves-light btn light-blue" onClick={() => onClickRandomMovieHandler()}>
                        I feel lucky
                    </span>
                </div>
            </form>
            </div>
            <div className="row">
                { userListResultsExists && searchResultsExists && searchResults.map(movie => 
                    <MovieCard 
                        watchlisted={userWatchList.some(listObj => listObj.id === movie.id)} 
                        favorited={userFavList.some(listObj => listObj.id === movie.id  )} 
                        accountId={accountDetails.accountId || 0} 
                        movie={movie} 
                        key={movie.id}
                    /> )
                }
                { !vakaren_session_id && searchResults.map(movie => 
                    <MovieCard 
                        movie={movie} 
                        key={movie.id}
                    /> )
                }
            </div>
        </>
    )
}

const mapStateToProps = state => ({ 
    searchResults: get(state, 'data.searchResults.results', []),
    accountDetails: state.data.accountDetails || {},
    latestMovieResultId: state.data.latestMovieResultId,
    userFavList: get(state, 'data.userFavList.results', []),
    userWatchList: get(state, 'data.userWatchList.results', [])
});

const mapDispatchToProps = dispatch => {
    return {
        requestSearchResultAction: (query, page) => dispatch(requestSearchResultAction(query, page)),
        requestLatestMovieSearch: () => dispatch(requestLatestMovieSearch()),
        getAccountDetails: () => dispatch(getAccountDetails()),
        getFavList: (accountId) => dispatch(getFavList(accountId)),
        getWatchList: (accountId) => dispatch(getWatchList(accountId)),
        resetSearchResults: () => dispatch(resetSearchResults())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchMovies));

