import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/App.scss";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import BreadcrumbList from "./components/BreadcrumbList/BreadcrumbList";

import DeliverySelection from "./pages/DeliverySelection/DeliverySelection";
import NoMatch from "./pages/NoMatch/NoMatch";

function App() {

  const stagesList = [
    {
      id: "1",
      name: "Delivery Selection",
      path: "/"
    },
    {
      id: "2",
      name: "Order Creation",
      path: "/order-creation"
    },
    {
      id: "3",
      name: "Data and delivery",
      path: "/data-delivery"
    }
  ]

  return (
    <Router forceRefresh={true}>
      <NavBar>
        <Logo />
        <BreadcrumbList stages={stagesList} />
      </NavBar>
      <div className="main">
        <Switch>
          <Route exact path="/" >
            <DeliverySelection />
          </Route>

          <Route exact path="/order-creation/:id">
          </Route>

          <Route path="/data-deliver">{/* <DetailProduct /> */}</Route>

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;