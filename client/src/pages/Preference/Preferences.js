import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import "./Preferences.css";

class Preferences extends Component {

  state = {
    preferences: []
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

    handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
                       name='checkedTrue'
                       type='checkbox'
                       checked={item.value===true}
                       onChange={this.handleInputChange} />
                       {'  '}
                       <input
                       name='checkedFalse'
                       type='checkbox'
                       checked={item.value===false}
                       onChange={this.handleInputChange} />
                    </p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Preferences to Display</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Preferences;
