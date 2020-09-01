import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getMovieById, getMovieVideos, getMoviePosters, getAccountDetails, resetSearchResults } from './../../store/actions'
import Logo from './../Logo/Logo';
import NoImage from './../../assets/images/no-image.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MoviePage.scss';


const MoviePage = ({getMovieById, getMovieVideos, match, getMoviePosters, movieDetails, moviePosters, movieVideos, resetSearchResults}) => {
    useEffect(() => {
        const {id} = match.params;
        getMovieById(id);
        getMovieVideos(id);
        getMoviePosters(id);
        /* eslint-disable */
    }, [])

    const {id, poster_path, title, runtime, tagline, overview, genres, release_date, homepage} = movieDetails;
   
    const jumbotronBackgroundStyle = {
        backgroundImage: poster_path ? `url(https://image.tmdb.org/t/p/w500/${poster_path})` : `url(${NoImage})`
    }

    const onLogoClickHandler = () => {
        return resetSearchResults();
    }


    return (
        <>
            <Logo face={false} classes={'navbar'} onClickHandler={onLogoClickHandler} />
            {id ? <div className="movie-container">
                <div className="jumbotron" style={jumbotronBackgroundStyle}>
                    <span className="jumbotron-overlay"/>
                    <div className="jumbotron-right-side">
                        <p className="title">{title}</p>
                        {runtime && <p className="movie-info runtime">Runtime: {runtime } mins</p>}
                        {tagline && <p className="movie-info tagline">Tagline:  {tagline}</p>}
                        {overview && <p className="movie-info overview">Overview: {overview}</p>}
                        {homepage && <p className="movie-info website"><a href={homepage} target="_blank" rel="noopener noreferrer">Website</a></p>}
                        {genres && <p className="movie-info genres">{genres && genres.map(genre => <span key={genre.id} className="bubble">{genre.name}</span>)} </p>}
                        {release_date && <p className="movie-info release-date">Release Date: {release_date}</p>}
                    </div>
                </div>
                <div className="video-container">
                    <h3 className="carousel-title">Videos</h3>
                    {movieVideos && movieVideos.length > 0 ? movieVideos.map((video, index) => 
                        <iframe
                            className="movie-video"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            key={index}
                        />
                        )
                    : <div className="no-such-movie"> This movie has no videos available. </div>}
                </div>
                <div className="image-container">
                    <h3 className="carousel-title">Posters</h3>
                    <div className="images">
                        {moviePosters && moviePosters.length > 0 ? moviePosters.map((poster, index) => 
                                <img className="movie-posters" alt="poster" key={index} src={`https://image.tmdb.org/t/p/w500${poster.file_path}`} />
                            )
                        : <div className="no-such-movie"> This movie has no posters available. </div> }
                    </div>
                </div>
            </div> : <div className="no-such-movie"> <img alt="noimage" src={NoImage} /> There is no such movie. Please go back to search. </div>}
        </>
    )
}

const mapStateToProps = state => ({ 
    movieDetails: state.data.movieDetails,
    moviePosters: state.data.moviePosters.posters,
    movieBackdrops: state.data.moviePosters.backdrops,
    movieVideos: state.data.movieVideos.results
});

const mapDispatchToProps = dispatch => {
    return {
        getMovieById: id => dispatch(getMovieById(id)),
        getMovieVideos: id => dispatch(getMovieVideos(id)),
        getMoviePosters: id => dispatch(getMoviePosters(id)),
        getAccountDetails: () => dispatch(getAccountDetails()),
        resetSearchResults: () => dispatch(resetSearchResults())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePage));

