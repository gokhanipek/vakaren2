import { put, takeEvery } from "redux-saga/effects";
import { 
  GET_AUTH_TOKEN, 
  GET_POPULAR_MOVIES, 
  GET_SEARCH_RESULT, 
  GET_LATEST_MOVIE_SEARCH,
  REQUEST_SESSION_ID,
  GET_MOVIE_BY_ID,
  GET_MOVIE_VIDEOS,
  GET_MOVIE_POSTERS,
  GET_ACCOUNT_DETAILS,
  ADD_TO_LIST,
  GET_FAV_LIST,
  GET_WATCH_LIST,
  receiveSearchResultAction,  
  receiveRandomMovieSearch, 
  receivePopularMoviesAction,
  receiveMovieById,
  receiveMovieVideos,
  receiveMoviePosters,
  receiveAccountDetails,
  addToListResponse,
  receiveWatchList,
  receiveFavList,
 } from "./actions";

const apiKey = process.env.REACT_APP_API_KEY; 

//authentication
export const getAuthToken = () => {
  fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
          const location = window.location;
          const { request_token } = response;
          window.location = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${location}`;
      })
      .catch(error => console.log(error));
};

export const requestSessionId = (action) => {
  // after the user allows the request_token, get the new session_id using that token
  const url = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`;
  const body = JSON.stringify({
      "request_token": action.data
  });


  fetch(url, {
      method: 'POST',
      body: body,
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(response => {
          const { success, session_id } = response;
          if (success) {
              localStorage.setItem('vakaren_session_id', JSON.stringify({ session_id }));
          }
        })
      .catch(error => console.log(error));
};

export function* getAccountDetails() {
  const vakaren_session_id = JSON.parse(localStorage.getItem('vakaren_session_id'));
  try {
    const response = yield fetch(`https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${vakaren_session_id.session_id}`)
    const data = yield response.json();
    yield put(receiveAccountDetails(data));
  } catch (e) {
      console.log(e);
  }
}

export function* getPopularMovies(action) {
  try {
    const response = yield fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
    const data = yield response.json();
    yield put(receivePopularMoviesAction(data));
  } catch (e) {
      console.log(e); // Just log it for now
  }
}

export function* getMovieById (action) {
  try {    
    const response = yield fetch(`https://api.themoviedb.org/3/movie/${action.id}?api_key=${apiKey}`);
    const data = yield response.json();
    yield put(receiveMovieById(data));
  } catch (e) {
    console.log(e);
  }
};

export function* getMovieVideos (action) {
  try {
    const response = yield fetch(`https://api.themoviedb.org/3/movie/${action.id}/videos?api_key=${apiKey}&language=en-US`);
    const data = yield response.json();
    yield put(receiveMovieVideos(data));
  } catch(e) {
    console.log(e);
  }
};

export function* getMoviePosters (action) {
  try {
    const response = yield fetch(`https://api.themoviedb.org/3/movie/${action.id}/images?api_key=${apiKey}&language=en-US&include_image_language=en,null`);
    const data = yield response.json();
    yield put(receiveMoviePosters(data));
  } catch(e) {
    console.log(e);
  }
}

export function* getMovieSearch(action) {
  try {
      const response = yield fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${action.query}&page=${action.page}&include_adult=false`);
      const data = yield response.json();
      yield put(receiveSearchResultAction(data));
  } catch (e) {
      console.log(e);
  }
}


export function* getLatestMovieSearch() {
  try {
    // do api call
    const response = yield fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`);
    const data = yield response.json();
    yield put(receiveRandomMovieSearch(data));
  } catch (e) {
    console.log(e);
  }
}

export function* addToList({accountId, movieId, listType, type}) {

  try {
    const vakaren_session_id = JSON.parse(localStorage.getItem('vakaren_session_id'));
    const url = `https://api.themoviedb.org/3/account/${accountId}/${listType}?api_key=${apiKey}&session_id=${vakaren_session_id.session_id}`;

    const body = JSON.stringify({
        "media_type": "movie",
        "media_id": movieId,
        [listType]: true
      });
  
      const response = yield fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
      });

      const responseJSON = yield response.json();

      const { success } = responseJSON;

      if (success) {
        yield put(addToListResponse(
          {
            movieId,
            favorited: true
          }
        ));
      } else {
          // good to add messages for the user why it failed; according to the status_code that is returned
          console.log('Action failed');
      }
  } catch(error){
    console.log(error)
  }
}

export function* getFavList({accountId}) {
  const vakaren_session_id = JSON.parse(localStorage.getItem('vakaren_session_id'));
  try {
    // do api call
    const response = yield fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${apiKey}&language=en-US&session_id=${vakaren_session_id.session_id}&sort_by=created_at.asc&page=1`);
    const data = yield response.json();
    yield put(receiveFavList(data));
  } catch (e) {
    console.log(e);
  }
}

export function* getWatchList({accountId}) {
  const vakaren_session_id = JSON.parse(localStorage.getItem('vakaren_session_id'));
  try {
    // do api call
    const response = yield fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${apiKey}&language=en-US&session_id=${vakaren_session_id.session_id}&sort_by=created_at.asc&page=1`);
    const data = yield response.json();
    yield put(receiveWatchList(data));
  } catch (e) {
    console.log(e);
  }
}



export default function* requestApiData() {
  yield takeEvery( GET_AUTH_TOKEN, getAuthToken );
  yield takeEvery( GET_POPULAR_MOVIES, getPopularMovies );
  yield takeEvery( GET_SEARCH_RESULT, getMovieSearch );
  yield takeEvery( GET_LATEST_MOVIE_SEARCH, getLatestMovieSearch );
  yield takeEvery( REQUEST_SESSION_ID, requestSessionId);
  yield takeEvery( GET_MOVIE_BY_ID, getMovieById );
  yield takeEvery( GET_MOVIE_VIDEOS, getMovieVideos );
  yield takeEvery( GET_MOVIE_POSTERS, getMoviePosters ); 
  yield takeEvery( GET_ACCOUNT_DETAILS, getAccountDetails );
  yield takeEvery( ADD_TO_LIST, addToList );
  yield takeEvery( GET_FAV_LIST, getFavList );
  yield takeEvery( GET_WATCH_LIST, getWatchList );
}
