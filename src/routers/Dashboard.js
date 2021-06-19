import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { DcScreen } from "../pages/DcScreen";
import { MarvelScreen } from "../pages/MarvelScreen";
import { SearchScreen } from "../pages/SearchScreen";

export default function Dashboard() {
  return (
    <>
      <header className="custom-navbar">
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen}></Route>
          <Route exact path="/dc" component={DcScreen}></Route>
          <Route exact path="/search" component={SearchScreen}></Route>
          <Redirect to="/marvel" />
        </Switch>
      </main>
    </>
  );
}
