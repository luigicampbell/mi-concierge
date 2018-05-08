import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Preference from "./pages/Preference/Preferences";
import Profile from "./pages/Profile/Profile";
import Homepage from "./pages/Homepage/Homepage";
import Initial from "./pages/Initial/Initial";

class Root extends Component {
  constructor(props) {
    super(props);

  // this component was changed from stateless to stateful so that the user_id will be passed
    this.state = {
      user_id: localStorage.getItem('user_id') || ""
    };
  }

//this function passes the user_id once the login has been authenticated
  afterLogin = (user_id) => {
    this.setState({
      user_id: user_id
    });
    localStorage.setItem('user_id', user_id);

    console.log("root user_id",this.state.user_id)
  }
//router has been changed from a stateless function to render in this directory
  render() {

    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Initial} />

          <Route exact path="/login" component={(props) => (<Login afterLogin={this.afterLogin} {...props} />) } />
          <Route exact path="/preference" component={(props) => (<Preference user_id={this.state.user_id} {...props} />)} />
          {/* <Route exact path="/preference" component={Preference} user_id={this.state.user_id} /> */}

          <Route exact path="/profile" component={(props) => (<Profile user_id={this.state.user_id} {...props} />)} />
          <Route exact path="/homepage" component={(props) => (<Homepage user_id={this.state.user_id} {...props} />)} />
        </Switch>
      </div>
    </Router>
    )
  }

}//end of component bracket

export default Root;