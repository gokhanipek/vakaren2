import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from "./store/store";
import Home from "./components/Home/Home";
import MoviePage from "./components/MoviePage/MoviePage";

const App = () =>  {
  return <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id" component={MoviePage}/>
      </Switch>
    </Router>
  </Provider>;
}

  
export default App;