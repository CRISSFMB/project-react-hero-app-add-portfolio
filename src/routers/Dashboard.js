import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { DcScreen } from "../pages/DcScreen";
import { HeroScreen } from "../pages/HeroScreen";
import { MarvelScreen } from "../pages/MarvelScreen";
import { SearchScreen } from "../pages/SearchScreen";

export default function Dashboard() {
  return (
    <div className="vh-100">
      <header>
        <Navbar />
      </header>

      <div className="container h-100 d-flex justify-content-center align-content-center">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen}></Route>
          <Route exact path="/dc" component={DcScreen}></Route>
          <Route exact path="/hero/:heroId" component={HeroScreen}></Route>
          <Route exact path="/search" component={SearchScreen}></Route>
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </div>
  );
}
