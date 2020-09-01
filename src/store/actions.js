export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
export const RECEIVE_REQUEST_TOKEN = 'RECEIVE_REQUEST_TOKEN';

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const RECEIVE_POPULAR_MOVIES = 'RECEIVE_POPULAR_MOVIES';

export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
export const RECEIVE_MOVIE_SEARCH = 'RECEIVE_MOVIE_SEARCH';

export const GET_LATEST_MOVIE_SEARCH = 'GET_LATEST_MOVIE_SEARCH';
export const RECEIVE_LATEST_MOVIE_SEARCH = 'RECEIVE_LATEST_MOVIE_SEARCH';

export const REQUEST_SESSION_ID = 'REQUEST_SESSION_ID';
export const RECEIVE_SESSION_ID = 'RECEIVE_SESSION_ID';

export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
export const RECEIVE_MOVIE_BY_ID = 'RECEIVE_MOVIE_BY_ID';

export const GET_MOVIE_VIDEOS = 'GET_MOVIE_VIDEOS';
export const RECEIVE_MOVIE_VIDEOS = 'RECEIVE_MOVIE_VIDEOS';

export const GET_MOVIE_POSTERS = 'GET_MOVIE_POSTERS';
export const RECEIVE_MOVIE_POSTERS = 'RECEIVE_MOVIE_POSTERS';

export const GET_ACCOUNT_DETAILS = 'GET_ACCOUNT_DETAILS';
export const RECEIVE_ACCOUNT_DETAILS = 'RECEIVE_ACCOUNT_DETAILS';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const ADD_TO_LIST_RESPONSE = 'ADD_TO_LIST_RESPONSE';

export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const ADD_TO_WATCHLIST_RESPONSE = 'ADD_TO_WATCHLIST_RESPONSE';

export const ADD_TO_FAVORITELIST = 'ADD_TO_FAVORITELIST';
export const ADD_TO_FAVORITELIST_RESPONSE = 'ADD_TO_FAVORITELIST_RESPONSE';

export const GET_FAV_LIST = 'GET_FAV_LIST';
export const RECEIVE_FAV_LIST = 'RECEIVE_FAV_LIST';

export const GET_WATCH_LIST = 'GET_WATCH_LIST';
export const RECEIVE_WATCH_LIST = 'RECEIVE_WATCH_LIST';

export const RESET_SEARCH_RESULTS = 'RESET_SEARCH_RESULTS'; 

export const requestApiDataAction = () => ({ type: REQUEST_API_DATA });
export const receiveApiDataAction = data => ({ type: RECEIVE_API_DATA, data });

export const getAuthTokenAction = () => ({ type: GET_AUTH_TOKEN });
export const receiveRequestTokenAction = data => ({ type: RECEIVE_REQUEST_TOKEN, data });

export const getPopularMoviesAction = () => ({ type: GET_POPULAR_MOVIES });
export const receivePopularMoviesAction = data => ({ type: RECEIVE_POPULAR_MOVIES, data });

export const requestSearchResultAction = (query, page) => ({ type: GET_SEARCH_RESULT, query, page }); 
export const receiveSearchResultAction = data => ({ type: RECEIVE_MOVIE_SEARCH, data }); 

export const requestLatestMovieSearch = () => ({ type: GET_LATEST_MOVIE_SEARCH });
export const receiveRandomMovieSearch = data => ({ type: RECEIVE_LATEST_MOVIE_SEARCH, data});

export const requestSessionId = data => ({ type: REQUEST_SESSION_ID, data });

export const getMovieById = id => ({ type: GET_MOVIE_BY_ID, id });
export const receiveMovieById = data => ({ type: RECEIVE_MOVIE_BY_ID, data });

export const getMovieVideos = id => ({ type: GET_MOVIE_VIDEOS, id });
export const receiveMovieVideos = data => ({ type: RECEIVE_MOVIE_VIDEOS, data });

export const getMoviePosters = id => ({ type: GET_MOVIE_POSTERS, id });
export const receiveMoviePosters = data => ({ type: RECEIVE_MOVIE_POSTERS, data });

export const getAccountDetails = () => ({ type: GET_ACCOUNT_DETAILS});
export const receiveAccountDetails = data => ({ type: RECEIVE_ACCOUNT_DETAILS, data });

export const addToList = (movieId, accountId, listType) => ({ type: ADD_TO_LIST, movieId, accountId, listType });
export const addToListResponse = data => ({ type: ADD_TO_LIST_RESPONSE, data });

export const getFavList = accountId => ({ type: GET_FAV_LIST, accountId });
export const getWatchList = accountId => ({ type: GET_WATCH_LIST, accountId });
export const receiveFavList = data => ({ type: RECEIVE_FAV_LIST, data });
export const receiveWatchList = data => ({ type: RECEIVE_WATCH_LIST, data });


export const resetSearchResults = () => ({ type: RESET_SEARCH_RESULTS })

export const addedToFavorites = data => ({type: ADD_TO_LIST_RESPONSE, data})