import React from 'react';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.trySignUp = this.trySignUp.bind(this)
    }

    trySignUp(e) {
      e.preventDefault();
      var uname = this.refs.uname.value;
      var pword = this.refs.pword.value;
      this.props.signUp(e,uname,pword);
      this.refs.SignUpForm.reset();
    }
    
    render() {
      return(
        <form id="userLogin" ref="SignUpForm" onSubmit={this.trySignUp}>
          <label id="unameLabel"><strong id="unameText">Username: </strong><input type="text" ref="uname" required/></label>
          <label id="pwordLabel"><strong id="pwordText">Password: </strong><input type="text" ref="pword" required/></label>
          <button type="submit" id="signBtn">SignUp</button>
        </form>
      );
    }
}

export default SignUp;