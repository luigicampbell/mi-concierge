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
              <div className="link-box">
                <Link to="/sharesettings">Share Settings</Link>
                <br/>
                <Link to="/preference">Preferences</Link>
                <br/>
                <Link to="/dinning">Dinning</Link>
                <br/>
                <Link to="/hotel">Hotel</Link>
                <br/>
                <Link to="/airline">Airline</Link>
                <br/>
                <Link to="/ground">Ground</Link>
                </div>
              </div>
            </div>
         </div>
       </div>
    </div>

export default Homepage;

