import React from "react";

import { Switch, Route } from "react-router-dom";

import ListClient from "../pages/ListClient";
import InfoClient from "../pages/InfoClient";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ListClient} />
    <Route path="/users/:email" component={InfoClient} />
  </Switch>
);

export default Routes;
