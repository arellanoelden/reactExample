import React from 'react';
import Login from './Login';
import * as messageActions from '../actions/MessageActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msgs: [["Chris","Hi"],["Erin","Yo"]],
            user: "Elden"
        }
        this.addMsg = this.addMsg.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    addMsg(e) {
      e.preventDefault();
      var new_msgs = this.state.msgs;
      new_msgs[new_msgs.length] = [this.state.user,this.refs.newMsg.value];
      this.setState({msgs: new_msgs});
      var new_msg = {msg: this.refs.newMsg.value, user: this.state.user};
      this.props.actions.saveMessage(new_msg);
      this.refs.Msgform.reset();
    }
    
    setUser(e) {
      e.preventDefault();
      this.setState({user: this.refs.newUser.value});
      this.refs.Userform.reset();
    }

    render() {
      /*if(this.props.state.loggedIn === false) {
        return <div><Login login={this.props.state.login} /></div>;
      }
      else {*/
        return(
          <div>
            <hr/>   
            <div className="MsgBox">
              <div className="Msgs">
                {this.props.messages.map(function(msg,i){
                  if(msg.user === this.state.user) {
                    return <div key ={i} className="UserContainer"><p className="MsgText">{msg.msg}</p></div>;
                  }
                  else {
                    return <div key ={i} className="MsgContainer"><strong>{msg.user}:</strong><p className="MsgText">{msg.msg}</p></div>;
                  }
                },this)}
              </div>
              <hr className="border"/>
              <form className="Msgform" ref="Msgform" onSubmit={this.addMsg}>
                <input type="text" name="newMsg" ref="newMsg" autoComplete="off" required/>
                <button type="submit" className="sendBtn">Send</button>
              </form>
            </div>
            <form className="Userform" ref="Userform" onSubmit={this.setUser}>
              <input type="text" name="newUser" ref="newUser" autoComplete="off" required/>
              <button type="submit" className="sendBtn">Set User</button>
            </form>
          </div>
        );
      //}
    }
}

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);