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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-0 col-lg-3">
            <div className="col-md-12 col-lg-6">
               <div className="panel">
                 <h6>Welcome to you personal virtual travel concierge. Where ever you fly, drive, or stay at your personal taste will be known ahead of time while improving your travel experience.</h6>
                  <button className="btn-initial" onClick={this.handleCustomer}>I am a Customer</button>
                  <button className="btn-initial" onClick={this.handleNewClient}>I am a New Client</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Initial;