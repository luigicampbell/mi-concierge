import React, { Component } from "react";
import { Navbar } from "../../components/List";
import API from "../../utils/API";
import "./Profile.css";


class Profile extends Component {

  state = {
    user_id: '',
    first_name: '',
    last_name: '',
    email_primary: '',
    phone_mobile: ''
  }

  componentDidMount() {
    let user_id = localStorage.getItem('user_id');
    if (user_id) {
      this.setState({
        user_id: user_id,
        first_name: localStorage.getItem('first_name'),
        last_name: localStorage.getItem('last_name'),
        email_primary: localStorage.getItem('email_primary'),
        phone_mobile: localStorage.getItem('phone_mobile'),
      })
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.user_id != this.state.user_id) {
    //   this.setState({
    //     first_name: 'hello'
    //   })
    // }
    // console.log("found user")
    // console.log(this.state.first_name)
      
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
            <div className="col-sm-0 col-md-3" />
            <div className="col-sm-12 col-md-6 mx-auto text-center align-content-center mb-3">
            {
                  this.state.user_id ? 
                  <Navbar key='Navbar'/>
                   : 
                  ''
                }
              <img src="/images/logo.png" alt="logo" className="img img-fluid mb-3" />
                {
                  this.state.user_id ? 
                  <h6>Update Your Profile</h6> : 
                  <h6>Welcome - Please Register</h6>
                }
                
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control"
                      type="text"
                      value={this.state.first_name}
                      name={this.state.first_name}
                      required="required" 
                      onChange={this.handleInputChange}
                      placeholder="first name"/>
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control"
                       type="text"
                       value={this.state.last_name}
                       name="last_name"
                       required="required"
                       onChange={this.handleInputChange}
                       placeholder="last name" />
                  </div>
                  <div className="form-group">
                    <label>Primary Email Address</label>
                    <input className="form-control"
                       type="text"
                       value={this.state.email_primary}
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
                       value={this.state.phone_mobile}
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
                  <button type="submit" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</button>
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