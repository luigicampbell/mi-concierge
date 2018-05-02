import React, { Component } from 'react';
import API from "./utils/API";
import logo from './logo.svg';
import './App.css';
import Preferences from "./pages/Preference";


class App extends Component {

  //testing
  state = {
    first_name: "",
    last_name: "",
    email_primary: "",
    phone_mobile: ""
    // user_id: "073af1f0-49b2-11e8-a2cb-936548b8bb4a"
  }

  componentDidMount() {
    this.showUser()
  }

  showUser = () => {
    API.findUserByEmail('scott@scottreynolds.net')
      .then(res => {
        const { first_name, last_name, email_primary, phone_mobile, user_id } = res.data[0];
          this.setState({
            first_name: first_name,
            last_name: last_name,
            email_primary: email_primary,
            phone_mobile: phone_mobile,
            user_id: user_id
          })
        }
      )
      .catch(err => console.log("findUserByEmail error ", err))
    }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Mi Concierge</h1>
          </header>
          <p className="App-intro">
            Scott Test Page: Where all your dreams <code>ARE KNOWN</code>
          </p>
          <ul>
            <li>First Name : {this.state.first_name}</li>
            <li>Last Name: {this.state.last_name}</li>
            <li>Primary Email: {this.state.email_primary}</li>
            <li>Mobile Phone: {this.state.phone_mobile}</li>
            <li>UserID: {this.state.user_id}</li>
          </ul>
          <Preferences user_id="073af1f0-49b2-11e8-a2cb-936548b8bb4a"/>
        </div>
      </div>
    );
  }
}

export default App;




