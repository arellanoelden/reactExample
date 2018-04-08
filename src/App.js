import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import * as userActions from './actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      loggedIn: false,
      login: this.login,
      curruser: "",
      signUp: this.signUp
    }
  }
  
  login(e,uname,pword) {
    console.log("should enter");
    var users = this.props.users;
    for(var i = 0; i < users.length; i++) {
      if(uname === users[i]["name"] && pword === users[i]["pword"]) {
        this.setState({loggedIn: true});
        this.setState({curruser: users[i][0]});
      }
    }
    if(this.state.loggedIn === false) {
      console.log("not logged in");
    }
  }

  signUp(e,uname,pword) {
    var new_user = {"name": uname, "pword": pword};
    //console.log(new_user);
    this.props.actions.saveUser(new_user);
    this.setState({loggedIn: true});
    this.setState({curruser: uname});
  }

  render() {
   // console.log(this.props)
    return (
      <div>
        <Header user={this.state.curruser} />
        {React.cloneElement(this.props.children,{state: this.state})}
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
