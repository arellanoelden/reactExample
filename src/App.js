import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      loggedIn: false,
      users: [["Elden","pass"],["Chris","pword"]],
      login: this.login,
      signUp: this.signUp
    }
  }

  login(e,uname,pword) {
    for(var i = 0; i < this.state.users.length; i++) {
      if(uname === this.state.users[i][0] && pword === this.state.users[i][1]) {
        this.setState({loggedIn: true});
      }
    }
  }

  signUp(e,uname,pword) {
    var new_users = this.state.users;
    new_users[new_users.length] = [uname,pword];
    this.setState({users: new_users});
  }

  render() {
    //{React.cloneElement(this.props.children,{state: this.state})}
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
