import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path=""></Route>
        <Route exact path=""></Route>
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
