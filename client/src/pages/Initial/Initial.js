import React, { Component } from "react";
import "./Initial.css";

class Initial extends Component {
    constructor(props) {
      super(props);
      this.state = {
        customer: "",
        newclient: "",
      }
    this.handleCustomer = this.handleCustomer.bind(this);
    this.handleNewClient = this.handleNewClient.bind(this);
    this.state = {hasAccount: false};
    }

  handleCustomer(event) {
    window.location = "/login";
  }

  handleNewClient(event) {
    window.location = '/profile';
  }

  render() {
    return (
      // <Navbar />
      <div className="container-fluid">
        <div className="row">
        <div className="col-sm-0 col-md-3" />
          <div className="col-sm-12 col-md-6">
            <img src="/images/logo.png" alt="logo" className="img img-fluid" ></img>
            <h5>Welcome to you personal virtual travel concierge</h5>
            <h6>Where ever you eat, fly, stay, or drive your personal tastes and preferences will be known ahead of time, improving your travel experience.</h6>
            <button type="button" className="btn btn-secondary d-flex text-center" onClick={this.handleCustomer}>I am a Customer</button>
            <button type="button" className="btn btn-secondary d-flex text-center">I am a Business</button>
          </div>
        <div className="col-sm-0 col-md-3" />
      </div>
    </div>
    )
  }
}
export default Initial;