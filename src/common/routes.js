import { Route } from "react-router";
import React from "react";

import App from "./containers/App";
import CounterPage from "./containers/CounterPage";
import RandomPage from "./containers/RandomPage";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="random" component={RandomPage} />
      <Route path="counter" component={CounterPage} />
  </Route>
);
