import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import CounterPage from "./containers/CounterPage";
import RandomPage from "./containers/RandomPage";

//Redux Dumb
import HomePage from "./components/Home";
import AboutPage from "./components/About";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="random" component={RandomPage} />
      <Route path="counter" component={CounterPage} />
      <Route path="about" component={AboutPage} />
  </Route>
);
