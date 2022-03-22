import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/home";
import Order from "./containers/order";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Order" component={Order} />
      </Switch>
    </Router>
  );
}

export default Routes;
