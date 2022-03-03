import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Explore from "../components/Explore/Explore";
import Header from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";
import Profile from "../components/Profile/Profile";

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/explore" component={Explore}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path=""></Route>
        <Route exact path=""></Route>
        <Route exact path=""></Route>
        <Route exact path=""></Route>
        <Route exact path=""></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
