import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

class HomePage extends React.Component {
  render() {
    if(this.props.state && this.props.state.loggedIn === false) {
        return (
          <div>
            <Login login={this.props.state.login} />
            <SignUp signUp={this.props.state.signUp} />
          </div>
        );
    }
    else {
      return (
        <div className="home">
          <h1>Keep Track</h1>
          <p>This site is used in order to help me keep track of things I wanna do/play/watch etc. 
             For now I have lists for movies/shows,games, and places to eat. For right now I can keep
             a list of games with crud support as well as messages</p>
        </div>
      );
    }
  }
}

export default HomePage;