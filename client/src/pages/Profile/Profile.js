import React, { Component } from "react";
import { Navbar } from "../../components/List";
import API from "../../utils/API";
import "./Profile.css";


class Profile extends Component {

  state = {
    user_id: '',
    first_name: ''
  }

  componentDidMount() {
    let first_name = localStorage.getItem('first_name');
    let user_id = localStorage.getItem('user_id');
    if (user_id) {
      this.setState({
        user_id: user_id,
        first_name: first_name
      })

    }
  }
    
    handleSubmit = (event) => {
      event.preventDefault();
    }

    handleInputChange = (event) => {
      let { value, name } = event.target;
      this.setState({
        [name]: value,
        isLoggedIn: false
      });
    }
createNewUser = (event) => {
    API.createUser('newUserData')
    .then(req => {

///post to the backend

    })
  }

    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-0 col-md-3"></div>
              <div className="col-sm-12 col-md-6">
              <Navbar key='Navbar'/>
              <img src="/images/logo.png" className="img-fluid mb-3" alt="Responsive image" />
                <h6>New Client Information</h6>
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control"
                      type="text"
                      name="first name"
                      required="required" 
                      onChange={this.handleInputChange}
                      placeholder="firstname"/>
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control"
                       type="text"
                       name="last name"
                       required="required"
                       onChange={this.handleInputChange}
                       placeholder="lastname" />
                  </div>
                  <div className="form-group">
                    <label>Primary Email Address</label>
                    <input className="form-control"
                       type="text"
                       name="email primary"
                       required="required"
                       pattern="/^.+@{1}.+\.[a-zA-Z]{2,4}$/"
                       onChange={this.handleInputChange}
                       placeholder="email address" />
                  </div>
                  <div className="form-group">
                    <label>Primary Phone Number</label>
                    <input className="form-control"
                       type="text"
                       name="phone_mobile"
                       required="required"
                       onChange={this.handleInputChange}
                       placeholder="mobile phone" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input className="form-control"
                       type="text"
                       name="password"
                       required="required"
                       onChange={this.handleInputChange}
                       placeholder="password" />
                  </div>
                  <button type="submit" className="btn btn-outline-light" onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
              <div className="col-sm-0 col-md-3"></div>
            </div>
         </div>
      )
    }
  }
  //component bracket
  export default Profile;