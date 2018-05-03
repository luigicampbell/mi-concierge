import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Preferences extends Component {
  
  state = {
    preferences: []
  };

  componentDidMount() {
    console.log("props", this.props)
    this.showPreferences('dining');
  }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };

  showPreferences = (category) => {
    console.log("12345", this.props.user_id)
    API.findPrefByUserIdCategory(this.props.user_id, category)
      .then(res => {
        console.log("res.data",res.data)
        this.setState({ preferences: res.data })
      })
      .catch(err => console.log(err));
    }

  handleInputChange = () => {}
  
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
                      Item: {item.item_name} {'  '}
                      <input
                       name='value'
                       type='checkbox'
                       checked={item.value}
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
