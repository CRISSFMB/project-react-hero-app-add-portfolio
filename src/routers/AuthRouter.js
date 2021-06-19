import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import { LoginScreen } from "../pages/LoginScreen";

export default function AuthRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen}></Route>
          <Route path="/" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}
