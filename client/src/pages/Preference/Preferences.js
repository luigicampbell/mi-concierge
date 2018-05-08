import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import "./Preferences.css";

class Preferences extends Component {

  state = {
    preferences: [],
    email_primary: "",
    category: ""
  };

  componentDidUpdate(prevProps) {
    if (prevProps.user_id !== this.props.user_id) this.showPreferences('dining');
  }

  showPreferences = (category) => {
    API.findPrefByUserIdCategory(this.props.user_id, category)
      .then(res => {
        console.log("res.data",res.data)
        this.setState({ preferences: res.data })
      })
      .catch(err => console.log(err));
    }


    // handleInputChange = event => {
    //   const { name, value } = event.target;
    //   this.setState({
    //     [name]: value
    //   });
    // };

    handleInputChange = event => {
    let target = event.target;
    // let value = target.type === 'checkbox' ? target.checked : target.value;
    let value = target.value;
    let name = target.name;
    let preferences = this.state.preferences.slice();

    for(let i = 0; i < preferences.length; i++){
      let item = preferences[i];
      if (item.product_id == name){
        item.value = value == 'true';
        console.log(item);
        break;
      }
    }
    this.setState({preferences: preferences});
    console.log(this.state);


    // function isProduct(item){
    //   return item.product_id == name;
    // }

    // console.log(this.state.preferences.find(isProduct));
    // this.setState({
    //   [name]: value
    // });
    // this.handleInputChange = this.handleInputChange.bind(this);
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {this.state.preferences.length ? (
              <List>
                {this.state.preferences.map(item => (
                  <ListItem key={item.product_id}>
                    <p>
                      {item.item_name} {'  '}
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
                    </p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Preferences to Display</h3>
            )}
          </div>
        <div className="col-md-0 col-lg-3"></div>
      </div>
    </div>
    );
  }
}

export default Preferences;
