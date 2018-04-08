import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.tryLogin = this.tryLogin.bind(this)
    }

    tryLogin(e) {
      e.preventDefault();
      var uname = this.refs.uname.value;
      var pword = this.refs.pword.value;
      this.props.login(e,uname,pword);
    }
    
    render() {
      return(
        <form className="userLogin" ref="loginForm" onSubmit={this.tryLogin}>
          <label id="unameLabel"><strong id="unameText">Username: </strong><input type="text" ref="uname" required/></label>
          <label id="pwordLabel"><strong id="pwordText">Password: </strong><input type="text" ref="pword" required/></label>
          <button type="submit" id="loginBtn">Login</button>
        </form>
      );
    }
}

export default Login;