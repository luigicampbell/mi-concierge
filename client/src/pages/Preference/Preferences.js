import React, { Component } from "react";
import API from "../../utils/API";
import { Navbar, List, ListItem } from "../../components/List";
import "./Preferences.css";


class Preferences extends Component {

  state = {
    preferences: [],
    email_primary: "",
    category: "",
    user_id: "",
    first_name: ""
  };

  componentDidMount() {
    let first_name = localStorage.getItem('first_name');
    let user_id = localStorage.getItem('user_id');
    console.log("component mounted")
    console.log("12345",first_name,user_id)
    this.setState({
      user_id: user_id,
      first_name: first_name
    })
   
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.user_id !== this.state.user_id) { 
    //   this.showPreferences(this.props.category);
    // }

    if (prevState.user_id != this.state.user_id) {
      this.showPreferences('dining')
    }
    

  }

  showPreferences = (category) => {
    console.log("showPreferences",this.state.user_id);
    API.findPrefByUserIdCategory(this.state.user_id, category)
      .then(res => {
        console.log("res.data",res.data)
        this.setState({ preferences: res.data })
      })
      .catch(err => console.log(err));
    }

    handleInputChange = event => {
    let target = event.target;
    // let value = target.type === 'checkbox' ? target.checked : target.value;
    let value = target.value;
    let name = target.name;
    let preferences = this.state.preferences.slice();

    for(let i = 0; i < preferences.length; i++){
      let item = preferences[i];
      console.log("item",item);
      if (item.product_id === name){
        item.value = value === 'true';
        break;
      }
    }
    console.log(this.props.user_id,name,value)
    API.updatePrefByUserIdProdId(this.state.user_id, name, value)
    this.setState({preferences: preferences});
    console.log(this.state);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-0 col-md-3" />
            <div className="col-sm-12 col-md-6 mx-auto text-center align-content-center mb-3">
              <Navbar key='Navbar'/>
              <img src="/images/logo.png" className="img img-fluid mb-0" />
              <h6>Hello {this.state.first_name}</h6>
              <h5>Your Dining Preferences</h5>
                  {this.state.preferences.length ? (
                    <List>
                      {this.state.preferences.map(item => (
                        <ListItem key={item.product_id}>
                          <p>
                            {item.item_name} {'  '}
                          </p>  
                            <input
                            name={item.product_id}
                            type='checkbox'
                            value='false'
                            checked={item.value===false}
                            onChange={this.handleInputChange} />
                            {'  '}
                            <input
                            name={item.product_id}
                            type='checkbox'
                            value='true'
                            checked={item.value===true}
                            onChange={this.handleInputChange} />
                          
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <h3>No Preferences to Display</h3>
                  )}
            </div>
          <div className="col-sm-0 col-md-3" />
      </div>
    </div>
    
    );
  }
}

export default Preferences;