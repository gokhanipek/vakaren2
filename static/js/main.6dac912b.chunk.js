(this.webpackJsonpvakaren=this.webpackJsonpvakaren||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/no-image.5fb4e99e.png"},33:function(e,t,a){e.exports=a.p+"static/media/vakaren.2582dbc8.png"},34:function(e,t,a){e.exports=a.p+"static/media/anonymous.30a0a053.png"},35:function(e,t,a){e.exports=a.p+"static/media/anonymous-dark.29167867.png"},36:function(e,t,a){e.exports=a.p+"static/media/github.d22ee372.png"},38:function(e,t,a){e.exports=a(59)},43:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),o=(a(43),a(15)),i=a(14),u=a(8),l=a(12),m=a(37),d=a(32),E=a(5),v=function(){return{type:"GET_AUTH_TOKEN"}},p=function(){return{type:"GET_POPULAR_MOVIES"}},f=function(e){return{type:"RECEIVE_POPULAR_MOVIES",data:e}},h=function(e){return{type:"RECEIVE_MOVIE_SEARCH",data:e}},_=function(e){return{type:"RECEIVE_LATEST_MOVIE_SEARCH",data:e}},b=function(e){return{type:"REQUEST_SESSION_ID",data:e}},g=function(e){return{type:"RECEIVE_MOVIE_BY_ID",data:e}},O=function(e){return{type:"RECEIVE_MOVIE_VIDEOS",data:e}},S=function(e){return{type:"RECEIVE_MOVIE_POSTERS",data:e}},I=function(){return{type:"GET_ACCOUNT_DETAILS"}},T=function(e){return{type:"RECEIVE_ACCOUNT_DETAILS",data:e}},j=function(e){return{type:"GET_FAV_LIST",accountId:e}},y=function(e){return{type:"GET_WATCH_LIST",accountId:e}},R=function(e){return{type:"RECEIVE_FAV_LIST",data:e}},k=function(e){return{type:"RECEIVE_WATCH_LIST",data:e}},N=function(){return{type:"RESET_SEARCH_RESULTS"}},x={apiToken:{},searchResults:{results:[]},searchHasResults:!1,isAuthenticated:!1,movieDetails:{},movieVideos:{},moviePosters:{},accountDetails:{}},A=Object(l.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"RECEIVE_REQUEST_TOKEN":return Object(E.a)(Object(E.a)({},e),{},{apiToken:n});case"RECEIVE_POPULAR_MOVIES":return Object(E.a)(Object(E.a)({},e),{},{popularMovies:n});case"RECEIVE_MOVIE_SEARCH":return Object(E.a)(Object(E.a)({},e),{},{searchResults:n});case"RECEIVE_LATEST_MOVIE_SEARCH":return Object(E.a)(Object(E.a)({},e),{},{latestMovieResultId:n.id});case"REQUEST_SESSION_ID":return Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!!n});case"RECEIVE_MOVIE_BY_ID":return Object(E.a)(Object(E.a)({},e),{},{movieDetails:n});case"ADD_TO_LIST_RESPONSE":return Object(E.a)(Object(E.a)({},e),{},{favoriteMovies:Object(E.a)(Object(E.a)({},e.favoriteMovies),{},{data:n})});case"RECEIVE_API_DATA":return Object(E.a)(Object(E.a)({},e),{},{movieDetails:n});case"RECEIVE_MOVIE_VIDEOS":return Object(E.a)(Object(E.a)({},e),{},{movieVideos:n});case"RECEIVE_MOVIE_POSTERS":return Object(E.a)(Object(E.a)({},e),{},{moviePosters:n});case"RECEIVE_ACCOUNT_DETAILS":return Object(E.a)(Object(E.a)({},e),{},{accountDetails:n});case"RECEIVE_FAV_LIST":return Object(E.a)(Object(E.a)({},e),{},{userFavList:n});case"RECEIVE_WATCH_LIST":return Object(E.a)(Object(E.a)({},e),{},{userWatchList:n});case"RESET_SEARCH_RESULTS":return Object(E.a)(Object(E.a)({},e),{},{searchResults:x.searchResults});default:return e}}}),w=a(23),C=a(6),V=a.n(C),L=a(7),D=V.a.mark(z),M=V.a.mark(X),P=V.a.mark($),U=V.a.mark(Z),H=V.a.mark(ee),G=V.a.mark(te),W=V.a.mark(ae),F=V.a.mark(ne),q=V.a.mark(ce),B=V.a.mark(re),J=V.a.mark(se),K=Object({NODE_ENV:"production",PUBLIC_URL:"/vakaren2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,Y=function(){fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=".concat(K)).then((function(e){return e.json()})).then((function(e){var t=window.location,a=e.request_token;window.location="https://www.themoviedb.org/authenticate/".concat(a,"?redirect_to=").concat(t)})).catch((function(e){return console.log(e)}))},Q=function(e){var t="https://api.themoviedb.org/3/authentication/session/new?api_key=".concat(K),a=JSON.stringify({request_token:e.data});fetch(t,{method:"POST",body:a,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.success,a=e.session_id;t&&localStorage.setItem("vakaren_session_id",JSON.stringify({session_id:a}))})).catch((function(e){return console.log(e)}))};function z(){var e,t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=JSON.parse(localStorage.getItem("vakaren_session_id")),n.prev=1,n.next=4,fetch("https://api.themoviedb.org/3/account?api_key=".concat(K,"&session_id=").concat(e.session_id));case 4:return t=n.sent,n.next=7,t.json();case 7:return a=n.sent,n.next=10,Object(L.a)(T(a));case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),D,null,[[1,12]])}function X(e){var t,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(K));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,Object(L.a)(f(a));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),M,null,[[0,11]])}function $(e){var t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=").concat(K));case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,n.next=9,Object(L.a)(g(a));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),P,null,[[0,11]])}function Z(e){var t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=").concat(K,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,n.next=9,Object(L.a)(O(a));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),U,null,[[0,11]])}function ee(e){var t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/images?api_key=").concat(K,"&language=en-US&include_image_language=en,null"));case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,n.next=9,Object(L.a)(S(a));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),H,null,[[0,11]])}function te(e){var t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(K,"&language=en-US&query=").concat(e.query,"&page=").concat(e.page,"&include_adult=false"));case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,n.next=9,Object(L.a)(h(a));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),G,null,[[0,11]])}function ae(){var e,t;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/movie/latest?api_key=".concat(K,"&language=en-US"));case 3:return e=a.sent,a.next=6,e.json();case 6:return t=a.sent,a.next=9,Object(L.a)(_(t));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),W,null,[[0,11]])}function ne(e){var t,a,n,c,r,s,o,i;return V.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.accountId,a=e.movieId,n=e.listType,e.type,u.prev=1,c=JSON.parse(localStorage.getItem("vakaren_session_id")),r="https://api.themoviedb.org/3/account/".concat(t,"/").concat(n,"?api_key=").concat(K,"&session_id=").concat(c.session_id),s=JSON.stringify(Object(w.a)({media_type:"movie",media_id:a},n,!0)),u.next=7,fetch(r,{method:"POST",body:s,headers:{"Content-Type":"application/json;charset=utf-8"}});case 7:return o=u.sent,u.next=10,o.json();case 10:if(i=u.sent,!i.success){u.next=17;break}return u.next=15,Object(L.a)({type:"ADD_TO_LIST_RESPONSE",data:{movieId:a,favorited:!0}});case 15:u.next=18;break;case 17:console.log("Action failed");case 18:u.next=23;break;case 20:u.prev=20,u.t0=u.catch(1),console.log(u.t0);case 23:case"end":return u.stop()}}),F,null,[[1,20]])}function ce(e){var t,a,n,c;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.accountId,a=JSON.parse(localStorage.getItem("vakaren_session_id")),r.prev=2,r.next=5,fetch("https://api.themoviedb.org/3/account/".concat(t,"/favorite/movies?api_key=").concat(K,"&language=en-US&session_id=").concat(a.session_id,"&sort_by=created_at.asc&page=1"));case 5:return n=r.sent,r.next=8,n.json();case 8:return c=r.sent,r.next=11,Object(L.a)(R(c));case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),console.log(r.t0);case 16:case"end":return r.stop()}}),q,null,[[2,13]])}function re(e){var t,a,n,c;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.accountId,a=JSON.parse(localStorage.getItem("vakaren_session_id")),r.prev=2,r.next=5,fetch("https://api.themoviedb.org/3/account/".concat(t,"/watchlist/movies?api_key=").concat(K,"&language=en-US&session_id=").concat(a.session_id,"&sort_by=created_at.asc&page=1"));case 5:return n=r.sent,r.next=8,n.json();case 8:return c=r.sent,r.next=11,Object(L.a)(k(c));case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),console.log(r.t0);case 16:case"end":return r.stop()}}),B,null,[[2,13]])}function se(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.b)("GET_AUTH_TOKEN",Y);case 2:return e.next=4,Object(L.b)("GET_POPULAR_MOVIES",X);case 4:return e.next=6,Object(L.b)("GET_SEARCH_RESULT",te);case 6:return e.next=8,Object(L.b)("GET_LATEST_MOVIE_SEARCH",ae);case 8:return e.next=10,Object(L.b)("REQUEST_SESSION_ID",Q);case 10:return e.next=12,Object(L.b)("GET_MOVIE_BY_ID",$);case 12:return e.next=14,Object(L.b)("GET_MOVIE_VIDEOS",Z);case 14:return e.next=16,Object(L.b)("GET_MOVIE_POSTERS",ee);case 16:return e.next=18,Object(L.b)("GET_ACCOUNT_DETAILS",z);case 18:return e.next=20,Object(L.b)("ADD_TO_LIST",ne);case 20:return e.next=22,Object(L.b)("GET_FAV_LIST",ce);case 22:return e.next=24,Object(L.b)("GET_WATCH_LIST",re);case 24:case"end":return e.stop()}}),J)}var oe=Object(m.a)(),ie=Object(l.createStore)(A,Object(d.composeWithDevTools)(Object(l.applyMiddleware)(oe)));oe.run(se);var ue=a(24),le=a(17),me=(a(50),a(19)),de=a.n(me),Ee=(a(51),Object(u.f)(Object(o.b)((function(e){return{favoritedMovie:Object(le.get)(e,"data.favoriteMovies.data.movieId","")}}),(function(e){return{addToList:function(t,a,n){return e(function(e,t,a){return{type:"ADD_TO_LIST",movieId:e,accountId:t,listType:a}}(t,a,n))},getAccountDetails:function(){return e({type:"GET_ACCOUNT_DETAILS"})},getFavList:function(t){return e(j(t))},getWatchList:function(t){return e(y(t))}}}))((function(e){var t=e.movie,a=e.addToList,r=e.accountId,s=e.favorited,o=e.watchlisted,u=e.getWatchList,l=e.getFavList,m=e.favoritedMovie,d=t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):de.a,E={backgroundImage:"url(".concat(d,")")},v=JSON.parse(localStorage.getItem("vakaren_session_id"));return Object(n.useEffect)((function(){v&&l(r),v&&u(r)}),[m]),c.a.createElement("div",{className:"col s12 m6"},c.a.createElement("div",{className:"movie-card",style:E},c.a.createElement("div",{className:"movie-card-overlay"}),c.a.createElement("div",{className:"movie-card-right-side"},c.a.createElement("h2",{className:"card-title"},t.original_title),c.a.createElement("span",{className:"card-date"},t.release_date),c.a.createElement("span",{className:"card-description"},t.overview.substring(0,150),"..."),c.a.createElement(i.b,{to:"/movie/".concat(t.id),className:"btn btn-outline movie-card__button"}," Details ")),c.a.createElement("div",{className:"movie-card-actions"},v&&c.a.createElement("div",{className:"card-buttons"},c.a.createElement("i",{className:"large material-icons white-text fav-or-watch ".concat(o?"watchlist":""),onClick:function(){return function(e,t,n){v&&a(e,t,n)}(t.id,r,"watchlist")}},"access_time"),c.a.createElement("i",{className:"large material-icons white-text fav-or-watch ".concat(s?"fav":""),onClick:function(){return a(t.id,r,"favorite")}},"favorite")))))})))),ve=Object(u.f)(Object(o.b)((function(e){return{searchResults:Object(le.get)(e,"data.searchResults.results",[]),accountDetails:e.data.accountDetails||{},latestMovieResultId:e.data.latestMovieResultId,userFavList:Object(le.get)(e,"data.userFavList.results",[]),userWatchList:Object(le.get)(e,"data.userWatchList.results",[])}}),(function(e){return{requestSearchResultAction:function(t,a){return e(function(e,t){return{type:"GET_SEARCH_RESULT",query:e,page:t}}(t,a))},requestLatestMovieSearch:function(){return e({type:"GET_LATEST_MOVIE_SEARCH"})},getAccountDetails:function(){return e({type:"GET_ACCOUNT_DETAILS"})},getFavList:function(t){return e(j(t))},getWatchList:function(t){return e(y(t))},resetSearchResults:function(){return e({type:"RESET_SEARCH_RESULTS"})}}}))((function(e){var t=e.history,a=e.accountDetails,r=e.requestSearchResultAction,s=e.requestLatestMovieSearch,o=e.searchResults,i=e.getFavList,u=e.getWatchList,l=e.getAccountDetails,m=e.latestMovieResultId,d=e.resetSearchResults,E=e.userFavList,v=e.userWatchList,p=Object(n.useState)(""),f=Object(ue.a)(p,2),h=f[0],_=f[1],b=JSON.parse(localStorage.getItem("vakaren_session_id"));Object(n.useEffect)((function(){return b&&l(),s(),function(){d()}}),[]),Object(n.useEffect)((function(){b&&i(a.id,"favorite"),b&&u(a.id,"watchlist")}),[a]);var g=E.length>0&&v.length>0,O=o&&o.length>0;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"input-field col s12 searchbar"},c.a.createElement("form",{"data-test":"component-search-form",onSubmit:function(e){e.preventDefault();var t=encodeURIComponent(h.trim());""!==t&&r(t,1)}},c.a.createElement("input",{placeholder:"Type a movie name....",id:"search",type:"text",className:"validate",onChange:function(e){_(e.target.value)}}),c.a.createElement("div",{className:"buttons-container"},c.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn light-blue"},"Search"),c.a.createElement("span",{type:"submit",className:"waves-effect waves-light btn light-blue",onClick:function(){return function(){var e=Math.floor(Math.random()*m)+1;t.push("/movie/".concat(e))}()}},"I feel lucky")))),c.a.createElement("div",{className:"row"},g&&O&&o.map((function(e){return c.a.createElement(Ee,{watchlisted:v.some((function(t){return t.id===e.id})),favorited:E.some((function(t){return t.id===e.id})),accountId:a.accountId||0,movie:e,key:e.id})})),!b&&o.map((function(e){return c.a.createElement(Ee,{movie:e,key:e.id})}))))}))),pe=a(33),fe=a.n(pe),he=(a(53),function(e){var t=e.classes,a=e.onClickHandler;Object(n.useEffect)((function(){return document.documentElement.addEventListener("mousemove",r),function(){document.documentElement.removeEventListener("mousemove",r)}}),[]);var r=function(e){document.querySelectorAll(".eye").forEach((function(t){var a=t.getBoundingClientRect().left+t.clientWidth/2,n=t.getBoundingClientRect().top+t.clientHeight/2,c=Math.atan2(e.pageX-a,e.pageY-n)*(180/Math.PI)*-1+270;t.style.transform="rotate("+c+"deg)"}))};return c.a.createElement("div",{className:"logo-container ".concat(t)},c.a.createElement("div",{className:"face"},c.a.createElement("div",{className:"eyes"},c.a.createElement("div",{className:"eye"}),c.a.createElement("div",{className:"eye"}))),c.a.createElement(i.b,{to:"/",onClick:function(){a()}},c.a.createElement("img",{className:"logo",alt:"vakaren",src:fe.a,width:"270px"})))}),_e=(a(54),a(34)),be=a.n(_e),ge=a(35),Oe=a.n(ge),Se=(a(55),function(e){var t=e.onClickHandler,a=e.isAuthenticated?"Authenticated Session":"Unauthorized Session";return c.a.createElement("div",{className:"authorize-image-container ".concat(a?"authenticated":"unauthenticated")},c.a.createElement("img",{className:"authorize-image",alt:"spy","data-position":"bottom","data-tooltip":"I am a tooltip",src:a?be.a:Oe.a,onClick:function(){t()}}),c.a.createElement("p",null,a))}),Ie=a(36),Te=a.n(Ie),je=(a(56),function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("a",{href:"https://www.github.com/gokhanipek"},c.a.createElement("img",{alt:"github",className:"contact-image",src:Te.a})))}),ye=Object(u.f)(Object(o.b)((function(e){return{searchResults:e.data.searchResults.results||null}}),(function(e){return Object(l.bindActionCreators)({getAuthTokenAction:v,getPopularMoviesAction:p,requestSessionId:b,getAccountDetails:I,resetSearchResults:N},e)}))((function(e){var t=e.getAuthTokenAction,a=e.location,r=e.searchResults,s=e.requestSessionId,o=e.resetSearchResults;Object(n.useEffect)((function(){var e=(a.search.includes("approved=true")?u():{}).request_token;s(e)}),[]);var i=JSON.parse(localStorage.getItem("vakaren_session_id")),u=function(){if(""===a.search)return null;var e=a.search.substring(1).split("&"),t={};return e.map((function(e){var a=e.split("="),n=Object(ue.a)(a,2),c=n[0],r=n[1];t[c]=r})),t};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"home-wrapper ".concat(r.length>0?"top":"bottom")},c.a.createElement(Se,{isAuthenticated:i,onClickHandler:function(){return i?null:t()}}),c.a.createElement(he,{onClickHandler:function(){return o()}}),c.a.createElement(ve,null),c.a.createElement(je,null)))}))),Re=(a(57),a(58),Object(u.f)(Object(o.b)((function(e){return{movieDetails:e.data.movieDetails,moviePosters:e.data.moviePosters.posters,movieBackdrops:e.data.moviePosters.backdrops,movieVideos:e.data.movieVideos.results}}),(function(e){return{getMovieById:function(t){return e(function(e){return{type:"GET_MOVIE_BY_ID",id:e}}(t))},getMovieVideos:function(t){return e(function(e){return{type:"GET_MOVIE_VIDEOS",id:e}}(t))},getMoviePosters:function(t){return e(function(e){return{type:"GET_MOVIE_POSTERS",id:e}}(t))},getAccountDetails:function(){return e({type:"GET_ACCOUNT_DETAILS"})},resetSearchResults:function(){return e({type:"RESET_SEARCH_RESULTS"})}}}))((function(e){var t=e.getMovieById,a=e.getMovieVideos,r=e.match,s=e.getMoviePosters,o=e.movieDetails,i=e.moviePosters,u=e.movieVideos,l=e.resetSearchResults;Object(n.useEffect)((function(){var e=r.params.id;t(e),a(e),s(e)}),[]);var m=o.id,d=o.poster_path,E=o.title,v=o.runtime,p=o.tagline,f=o.overview,h=o.genres,_=o.release_date,b=o.homepage,g={backgroundImage:d?"url(https://image.tmdb.org/t/p/w500/".concat(d,")"):"url(".concat(de.a,")")};return c.a.createElement(c.a.Fragment,null,c.a.createElement(he,{face:!1,classes:"navbar",onClickHandler:function(){return l()}}),m?c.a.createElement("div",{className:"movie-container"},c.a.createElement("div",{className:"jumbotron",style:g},c.a.createElement("span",{className:"jumbotron-overlay"}),c.a.createElement("div",{className:"jumbotron-right-side"},c.a.createElement("p",{className:"title"},E),v&&c.a.createElement("p",{className:"movie-info runtime"},"Runtime: ",v," mins"),p&&c.a.createElement("p",{className:"movie-info tagline"},"Tagline:  ",p),f&&c.a.createElement("p",{className:"movie-info overview"},"Overview: ",f),b&&c.a.createElement("p",{className:"movie-info website"},c.a.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},"Website")),h&&c.a.createElement("p",{className:"movie-info genres"},h&&h.map((function(e){return c.a.createElement("span",{key:e.id,className:"bubble"},e.name)}))," "),_&&c.a.createElement("p",{className:"movie-info release-date"},"Release Date: ",_))),c.a.createElement("div",{className:"video-container"},c.a.createElement("h3",{className:"carousel-title"},"Videos"),u&&u.length>0?u.map((function(e,t){return c.a.createElement("iframe",{className:"movie-video",src:"https://www.youtube.com/embed/".concat(e.key),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video",key:t})})):c.a.createElement("div",{className:"no-such-movie"}," This movie has no videos available. ")),c.a.createElement("div",{className:"image-container"},c.a.createElement("h3",{className:"carousel-title"},"Posters"),c.a.createElement("div",{className:"images"},i&&i.length>0?i.map((function(e,t){return c.a.createElement("img",{className:"movie-posters",alt:"poster",key:t,src:"https://image.tmdb.org/t/p/w500".concat(e.file_path)})})):c.a.createElement("div",{className:"no-such-movie"}," This movie has no posters available. ")))):c.a.createElement("div",{className:"no-such-movie"}," ",c.a.createElement("img",{alt:"noimage",src:de.a})," There is no such movie. Please go back to search. "))})))),ke=function(){return c.a.createElement(o.a,{store:ie},c.a.createElement(i.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(ye,null)),c.a.createElement(u.a,{path:"/movie/:id",component:Re}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.6dac912b.chunk.js.map