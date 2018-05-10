import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/List";
import "./Homepage.css";

class Homepage extends Component {

  state = {
    user_id: "",
    first_name: ""
  }

  componentDidMount() {
    let first_name = localStorage.getItem('first_name');
    let user_id = localStorage.getItem('user_id');
    this.setState({
      user_id: user_id,
      first_name: first_name
    })
    console.log("xxx",first_name,this.state.user_id,this.state.first_name)
  }

  // populateState = () => {
  //   // localStorage.getItem('user_id', user_id)
  //   // localStorage.getItem('first_name', first_name);
  // }

  render() {
    return (
    <div className="container-fluid">
    <Navbar key='Navbar'/>
      <div className="row">
         <div className="col-sm-0 col-md-3" />
           <div className="col-sm-12 col-md-6">
            <img src="/images/logo.png" className="img img-fluid" alt="Responsive image" mb-3 ></img>
            {/* <div className="panel"> */}
              {/* <p>Hello {this.state.first_name}</p> */}
              <p>Hello {this.state.first_name}</p>
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
    )
  }
}

export default Homepage;

