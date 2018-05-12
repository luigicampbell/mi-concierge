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
      <div className="row">
         <div className="col-sm-0 col-md-3" />
         <div className="col-sm-12 col-md-6 mx-auto text-center align-content-center mb-3">
            <Navbar key='Navbar'/>
            <img src="/images/logo.png" className="img img-fluid mb-0"></img>
              <h6>Hello {this.state.first_name}</h6>
              <div className="link-box mt-0">
                {/* <Link to="/sharesettings">Share Settings</Link> */}
                {/* <Link >Share Settings</Link> */}
                <h5 className="text-center">Your Preferences</h5>
                <Link to="/preference" className="btn btn-outline-secondary align-content-center mx-auto text-center d-block m-0" >Dining</Link>
                <br/>
                <Link to="#" className="btn btn-outline-secondary align-content-center mx-auto text-center d-block m-0">Hotel</Link>
                <br/>
                <Link to="#" className="btn btn-outline-secondary align-content-center mx-auto text-center d-block m-0">Airline</Link>
                <br/>
                <Link to="#" className="btn btn-outline-secondary align-content-center mx-auto text-center d-block m-0">Ground</Link>
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

