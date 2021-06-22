import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { DcScreen } from "../pages/DcScreen";
import { HeroScreen } from "../pages/HeroScreen";
import { MarvelScreen } from "../pages/MarvelScreen";
import { SearchScreen } from "../pages/SearchScreen";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </>
    </>
  );
}
