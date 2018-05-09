import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () =>
    <div className="container-fluid">
      <div className="row">
         <div className="col-sm-0 col-md-3" />
           <div className="col-sm-12 col-md-6">
            <img src="/images/logo.png" className="img img-fluid" alt="Responsive image" mb-3 ></img>
            {/* <div className="panel"> */}
              {/* <p>Hello {this.state.first_name}</p> */}
              <p>Hello </p>
              <div className="link-box">
                {/* <Link to="/sharesettings">Share Settings</Link> */}
                {/* <Link >Share Settings</Link> */}
                <br/><br/>
                <p className="text-center">Your Preferences</p>
                <br/>
                <Link to="/preference" className="btn btn-outline-secondary align-content-center mx-auto text-center d-block" >Dinning</Link>
                <br/>
                <Link to="/api/preference/{this.state.user_id}/hotel" className="btn btn-outline-secondary align-content-center mx-auto text-center d-block">Hotel</Link>
                <br/>
                <Link to="/api/preference/{this.state.user_id}/airline" className="btn btn-outline-secondary align-content-center mx-auto text-center d-block">Airline</Link>
                <br/>
                <Link to="/api/preference/{this.state.user_id}/ground" className="btn btn-outline-secondary align-content-center mx-auto text-center d-block">Ground</Link>
                </div>
              {/* </div> */}
            </div>
            <div className="col-sm-0 col-md-3" />
         </div>
       {/* </div> */}
    </div>

export default Homepage;

