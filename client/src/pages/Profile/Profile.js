import React, { Component } from "react";
import API from "../../utils/API";
import "./Profile.css";

class Profile extends Component {
      constructor(props) {
        super(props);
        this.state = {
          first_name: "",
          last_name: "",
          email_primary: "",
          phone_mobile: "",
          user_id: "",
          isLoggedIn: false
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

      }//end of constructor bracket
    
    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.email_primary !== "`/^.+@{1}.+\.[a-zA-Z]{2,4}$/`") {
        console.log("it is Invalid email format.....");
      } else {
        return console.log("valid email format");
      }
//      alert(`Your information was submitted. Welcome ${this.state.last_name} ${this.state.first_name}`);
//      window.location = "/homepage";
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


    }
    )}

    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-0 col-lg-3">
              <div className="col-md-12 col-lg-6">
                <div className="panel">
                  <h3>New Client Information</h3>
                  <p>{this.state.first_name}</p>
                  <p>{this.state.last_name}</p>
                  <p>{this.state.email_primary}</p>
                  <form>
                    <div>
                    <h5>First Name</h5>
                      <input
                       type="text"
                       name="first_name"
                       onChange={this.handleInputChange}
                       placeholder="firstname"
                       required="required" />
                    </div>
                    <div>
                    <h5>Last Name</h5>
                      <input
                       type="text"
                       name="last_name"
                       required="required"
                       onChange={this.handleInputChange}
                       placeholder="lastname" />
                    </div>
                    <div>
                    <h5>Email</h5>
                      <input
                       type="text"
                       name="email_primary"
                       required="required"
                       pattern="/^.+@{1}.+\.[a-zA-Z]{2,4}$/"
                       onChange={this.handleInputChange}
                       placeholder="email address" />
                    </div>
                    <div>
                    <h5>Phone Mobile</h5>
                      <input
                       type="text"
                       name="phone_mobile"
                       required="required"
                       onChange={this.handleInputChange}
                       placeholder="mobile phone" />
                    </div>
                    <div>
                    <h5>Password</h5>
                      <input
                       type="text"
                       name="password"
                       required="required"
                       onChange={this.handleInputChange}
                       placeholder="password" />
                    </div>
                    <div className="submit">
                    <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
         </div>
        </div>
      )
    }
  }//component bracket
  export default Profile;