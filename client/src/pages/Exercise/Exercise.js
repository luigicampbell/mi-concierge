import React, { Component } from "react";
/*
class Exercise extends Component {

function ActionLink() {
  function handleClick(event) {
    event.preventDefault();
    console.log(`The link was clicked`);
  }
  return (
    <a href="#" onClick={handleClick}>
      Click Me
    </a>
  )
}

  render() {
    return (

    )
  }
}

///Toggle exercise
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
        ////This binding is necessary to make THIS work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "Yes" : "No"}
      </button>
    )
  }
}


//// Greeting on the condition that a USER is LOGGED IN or NOT

function Greeting(props) [
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <Guest />

  
function UserGreeting(props) {
  return <h1>Welcome Back</h1>;
}

function Guest(props) {
  return <h1>Please Sign In New User</h1>;
}

ReactDOM.render(
  <Greeting isLoggedIn={true} /> //Will return Welcome Back
  document.getElementById('root')
)

////login and Logout BUTTONS

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleCustomer.bind(this);
    this.handleLogoutClick = this.handleNewClient.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    const button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton onClick={this.handleLoginClick} />
    )

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>

  )
}
}

////Conditional methods
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && 
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
      </div>
  );
}

const messages = ['messsage 1', 'message 2'];
ReactDOM.render (
  <Mailbox unreadMessages={messages} />
)

/////Tiernary If CONDITIONAL STATEMENTS

render() {
  const isLoggedIn = this.state.isLoggedIn;

  return (
    <div>
      This User is <b>{isLoggedIn ? 'currently' : 'not'}</b>Logged in.
    </div>
  )
}


////Hiding a component from RENDERING
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}


///Rendering ListItems and Using the MAP Function

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

//Rendering a LIST inside a COMPONENT

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
     {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  )
}
const numbers = [1, 2, 3];

ReactDOM.render(
  <NumberList numbers={numbers} />
)

///Adding KEYS to uniquely identify a list item

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
  );


  ////========FORMS==========///


  class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ""};
      
      //bind these functions to the NameForm
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert(`A name was submitted ${this.state.value}`);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
        </form>
      )
    }
  }

  ////So if we want to enforce our handleChange as all uppercase

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  //// ====== DROP DOWN MENU ===== ////

  class FlavorForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert(`your favorite flavor is ${this.state.value}`);//window.location and move elsewhere
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="granpefruit">Grapefruit</option>
              <option value="lime">Lime</option>
            </select>
            <select multiple={true} value={['apple', 'oranges']}></select>
          </label>

          <input type="submit" value="Submit" />
        </form>
      )
    }
  }

  //// This is Scott's preference List comes from 

  class Reservation extends Component {
    constructor(props) {
      super(props);

      this.state + {
        email_primary: "",
        isLoggedIn: false
      };

      this.handleInputChnage = this.handleInputChnage.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'text' ? target.email_primary : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
    render() {
      return ()
    }
  }

*/