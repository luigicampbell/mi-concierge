import React, { Component } from "react";
import API from "../../utils/API";
import "./Login.css";

class Login extends Component {

  state = {
    email_primary: "",
    user_id: ""
  }

  handleInputChange = (event) => {
    let { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  verifyUser = (event) => {
    event.preventDefault();
    console.log("event",event)
    console.log("state", this.state.email_primary)
    API.findUserByEmail(this.state.email_primary)
      .then(res => {
        console.log("api call made", res)
        if (!res.data[0]) {
          console.log('handle this case');
          // return;
        }

        const {email_primary, user_id} = res.data[0];
          this.setState({
            email_primary: email_primary,
            user_id:  user_id
          });

          this.props.afterLogin(user_id);

          if (this.state.email_primary === email_primary) {
            console.log(`it match....`);
            // window.location = "/preference";
            // console.log(this.props);
            // debugger;
            this.props.history.push('/preference');
          } else {
            console.log(` it is invalid .....`);
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
      <div className="col-md-0 col-lg-3">
        <div className="col-md-12 col-lg-6">
          <div className="panel">
      <h5>Login Page</h5>
    <form>
      <input
        type="text"
        name="email_primary"
        value={this.state.email_primary}
        placeholder="example@gmail.com"
        onChange={this.handleInputChange} />
      <h5>email:{this.state.email_primary}</h5>
      <button onClick={this.verifyUser}>Login</button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
}
export default Login;
/*
render() {
  const {fields: {email_primary}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <input type="text" placeholder="Email"
            className={`form-control ${email_primary && email_primary.invalid ? 'has error' : ''}`}
            {...email_primary}
            />
            <span className="text-help">
              {email_primary ? email_primary.error : ''}
            </span>
            <input type="submit" />
      </form>
    );
}
}

function validation(values){
  const errors = {};
  const emailPattern = /(.+)@(.+)(2,)\.(.+)(2,)/;
  if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email';
  }
  return errors;
}

Login = reduxForm({
  form: 'Login',
  fields: ['email_primary'],
  validate: validation
}, null, null)(Login);
*/
