import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/App.scss";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import DeliverySelection from "./pages/DeliverySelection/DeliverySelection";

import NoMatch from "./pages/NoMatch/NoMatch";

function App() {
  

  return (
    <Router forceRefresh={true}>
      <NavBar>
        <Logo />
      </NavBar>
      <div className="main">
        <Switch>
          <Route exact path="/" >
            <DeliverySelection/>
          </Route>

          <Route exact path="/items">
          </Route>

          <Route path="/items/:id">{/* <DetailProduct /> */}</Route>

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
