import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./sass/App.scss"
import Logo from "./components/Logo/Logo"
import NavBar from "./components/NavBar/NavBar"
import Search from "./components/Search/Search"
import HomePage from "./pages/HomePage/HomePage"
import SearchResultsList from "./pages/SearchResultsList/SearchResultsList"

import NoMatch from "./pages/NoMatch/NoMatch"

function App() {
  const [boxSearchQuery, setBoxSearchQuery] = useState('');

  function searchQueryCallback(valueFromChild) {
    setBoxSearchQuery(valueFromChild)
  }

  return (
    <Router forceRefresh={true}>
      <NavBar>
        <Logo />
        <Search callbackFromParent={searchQueryCallback} />
      </NavBar>
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/items">
            <SearchResultsList search={boxSearchQuery} />
          </Route>
          <Route path="/items/:id">
            {/* <DetailProduct /> */}
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
