import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { DcScreen } from "../pages/DcScreen";
import { MarvelScreen } from "../pages/MarvelScreen";
import { SearchScreen } from "../pages/SearchScreen";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route path="/marvel" component={MarvelScreen}></Route>
          <Route path="/dc" component={DcScreen}></Route>
          <Route path="/search" component={SearchScreen}></Route>
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}
