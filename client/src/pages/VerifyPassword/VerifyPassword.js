import React, { Component } from "react";
import API from "../../utils/API";

class VerifyPassword extends Component {
  state = {
    password: ""
  }
  componentDidMount() {
    this.verifyPassword();
  }

  verifyPassword = (event) => {
///Need route to verify the user input with database
  }

  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-0 col-lg-3">
        <div className="col-md-12 col-lg-6">
          <h5>This is Password Page</h5>
            <input
              type="password" 
              name="password"
              required
              />
          <button> onClick={this.verifyPassword.bind(this)}>Submit</button>
      </div>
      </div>
      </div>
      </div>
    )
  }
}//end of component bracket
export default VerifyPassword;