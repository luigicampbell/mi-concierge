import React, { Component } from "react";
import API from "../../utils/API";
import { Navbar, List, ListItem } from "../../components/List";
import "./Preferences.css";


class Preferences extends Component {

  state = {
    preferences: [],
    email_primary: "",
    category: ""
  };

  componentDidMount() {
    console.log('didMount', this.props.user_id);
    this.showPreferences('dining')
    // this.showPreferences(this.props.category)
  }

  componentDidUpdate(prevProps) {
    console.log("preference page",this.props)
    if (prevProps.user_id !== this.props.user_id) this.showPreferences(this.props.category);
  }

  showPreferences = (category) => {
    console.log("showPreferences",this.props.user_id);
    API.findPrefByUserIdCategory(this.props.user_id, category)
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
    API.updatePrefByUserIdProdId(this.props.user_id, name, value)
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
      
      <div className="container-fluid" key='Content'>
      <Navbar key='Navbar'/>
        <div className="row">
          <div className="col-sm-0 col-md-3" />
            <div className="col-sm-12 col-md-6 mx-auto text-center align-content-center mb-3">
              <img src="/images/logo.png" className="img-fluid mb-3" alt="Responsive image" />
              <p>Hello {this.props.first_name}</p>
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
          <div className="col-sm-0 col-md-3" />
      </div>
    </div>
    
    );
  }
}

export default Preferences;