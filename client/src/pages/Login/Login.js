import React, { Component } from "react";
import API from "../../utils/API";
import "./Login.css";

class Login extends Component {

  state = {
    email_primary: "",
    user_id: "",
    first_name: "",
    last_name: "",
    phone_mobile: "",
    password: ""
  }

  componentDidMount() {
    localStorage.clear()
  }

  handleInput = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  verifyUser = (event) => {
    // let { value, name } = event.target;
    event.preventDefault();
    API.findUserByEmail(this.state.email_primary)
      .then(res => {
        if (res.data[0]) {
          const {email_primary, user_id, first_name, last_name, phone_mobile} = res.data[0];
          localStorage.setItem('user_id', user_id)
          localStorage.setItem('first_name', first_name);
          localStorage.setItem('last_name', last_name);
          localStorage.setItem('phone_mobile', phone_mobile);
          localStorage.setItem('email_primary', email_primary);
          this.props.history.push('/homepage');
        } else {
          alert("User not found");
          this.props.history.push('/profile')
        }
      }
    )
    .catch(err => console.log(`error, ${err}`));
  }
  
  render() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-sm-0 col-md-3" />
          <div className="col-sm-12 col-md-6 mx-auto text-center align-content-center mb-3">
            <img src="/images/logo.png" alt="logo"  className="img img-fluid mb-3" />
            <br />
            <h5>Please Login</h5>
            <br />
              <form>
                <div className="form-group">
                  <input className="form-control"
                    type="text"
                    name="email_primary"
                    value={this.state.email_primary}
                    placeholder="example@gmail.com"
                    onChange={this.handleInput} />
                    <br />
                  </div>
                  <div className="form-group">
                    <input className="form-control"
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="********"
                    onChange={this.handleInput} />
                    <button type="button" class="btn btn-secondary align-content-center mx-auto text-center d-block" onClick={this.verifyUser}>Login</button>
                  </div>
              </form>
            </div>
          <div className="col-sm-0 col-md-3" />
        </div>
      </div>
    )
  }
}

export default Login;

