import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Preference from "./pages/Preference/Preferences";
import Profile from "./pages/Profile/Profile";
import Homepage from "./pages/Homepage/Homepage";
import Initial from "./pages/Initial/Initial";

const Root = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Initial} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/preference" component={Preference} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/homepage" component={Homepage} />
      </Switch>
    </div>
  </Router>;

export default Root;