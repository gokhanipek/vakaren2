import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import { addToList, getAccountDetails, getWatchList, getFavList } from './../../store/actions'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { get } from 'lodash';
import NoImage from './../../assets/images/no-image.png'
import './MovieCard.scss';

const MovieCard = ({movie, addToList, accountId, favorited, watchlisted, getWatchList, getFavList, favoritedMovie}) => {
    const imageLink = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : NoImage;

    const style = {
      backgroundImage: `url(${imageLink})`
    }

    const clickHandler = (id, accountId, type) => {
      isAuthenticated && addToList(id, accountId, type);
    }

    const isAuthenticated = JSON.parse(localStorage.getItem('vakaren_session_id'));

    useEffect(() => {
      isAuthenticated && getFavList(accountId);
      isAuthenticated && getWatchList(accountId);
      /* eslint-disable */
    }, [])

    return (
        <div className="col s12 m6">
            <div className="movie-card" style={style}>
              <div className="movie-card-overlay"></div>
              <div className="movie-card-right-side">
                <h2 className="card-title">{movie.original_title}</h2>
                <span className="card-date">{movie.release_date}</span>
                <span className="card-description">{movie.overview.substring(0,150)}...</span>
                <Link to={`/movie/${movie.id}`} className="btn btn-outline movie-card__button"> Details </Link>
              </div>
              <div className="movie-card-actions">
              {
                isAuthenticated && <div className="card-buttons">
                    <i className={`large material-icons white-text fav-or-watch ${watchlisted ? 'watchlist' : '' }`} onClick={() => clickHandler(movie.id, accountId, 'watchlist')}>access_time</i>
                    <i className={`large material-icons white-text fav-or-watch ${favorited ? 'fav' : '' }`} onClick={() => addToList(movie.id, accountId, 'favorite')}>favorite</i>
                </div>
              }
              </div>
            </div>
        </div>
        )
}


const mapDispatchToProps = dispatch => {
  return {
      addToList: (movieId, accountId, listType) => dispatch(addToList(movieId, accountId, listType)),
      getAccountDetails: () => dispatch(getAccountDetails()),
      getFavList: (accountId) => dispatch(getFavList(accountId)),
      getWatchList: (accountId) => dispatch(getWatchList(accountId)),
  }
};

const mapStateToProps = state => ({ 
  favoritedMovie: get(state, 'data.favoriteMovies.data.movieId', '') 
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCard));



