import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () =>
    <div className="container-fluid">
      <div className="row">
         <div className="col-md-0 col-lg-3">
           <div className="col-md-12 col-lg-6">
            <div className="panel">
             <h5>This is Homepage</h5>
              {/* <p>Hello {this.state.first_name}</p> */}
              <p>Hello </p>
              <div className="link-box">
                {/* <Link to="/sharesettings">Share Settings</Link> */}
                {/* <Link >Share Settings</Link> */}
                <br/><br/>
                <p>Your Preferences</p>
                <br/>
                <Link to="/preference">Dinning</Link>
                <br/>
                <Link to="/api/preference/{this.state.user_id}/hotel">Hotel</Link>
                <br/>
                <Link to="/api/preference/{this.state.user_id}/airline">Airline</Link>
                <br/>
                <Link to="/api/preference/{this.state.user_id}/ground">Ground</Link>
                </div>
              </div>
            </div>
         </div>
       </div>
    </div>

export default Homepage;

