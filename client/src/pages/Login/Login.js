import React, { Component } from "react";
import API from "../../utils/API";
import "./Login.css";

class Login extends Component {

  state = {
    email_primary: "",
    user_id: "",
    first_name: ""
  }

  handleInputChange = (event) => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  verifyUser = (event) => {
    let { value, name } = event.target;
    event.preventDefault();
    console.log("event",event)
    console.log("state", this.state.email_primary)
    API.findUserByEmail(this.state.email_primary)
      .then(res => {
        console.log("api call made", res)
        if (res.data[0]) {
          console.log(`email address found`);
          const {email_primary, user_id, first_name} = res.data[0];
          localStorage.setItem('user_id', user_id)
          localStorage.setItem('first_name', first_name);
          // this.setState({
          //   email_primary: email_primary,
          //   user_id: user_id,
          //   first_name: first_name
          // });
          // this.props.afterLogin(user_id, first_name);
          // if (this.state.email_primary === email_primary) {
            this.props.history.push('/homepage');
        } else {
          console.log(` it is invalid .....`);
          alert("User not found");
          this.props.history.push('/profile')
          
        }
      }
    )
    .catch(err => console.log(`error, ${err}`));




    ///need to verify with the database
    //Need a separate function to do the verification and then window.location = "/homepage"
  }
  
  render() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-sm-0 col-md-3" />
          <div className="col-sm-12 col-md-6 mx-auto text-center align-content-center mb-3">
            <img src="/images/logo.png" className="img-fluid mb-3" alt="Responsive image" />
            <br />
            <h5>Please Login</h5>
            <br />
              <form>
                <input
                  type="text"
                  name="email_primary"
                  value={this.state.email_primary}
                  placeholder="example@gmail.com"
                  onChange={this.handleInputChange} />
                {/* <h5>email:{this.state.email_primary}</h5> */}
                <button type="button" class="btn btn-outline-secondary align-content-center mx-auto text-center d-block" onClick={this.verifyUser}>Next</button>
              </form>
            </div>
          <div className="col-sm-0 col-md-3" />
        </div>
      </div>
  )
}
}
export default Login;

