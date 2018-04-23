import React from 'react';
import Game from './Game';
import Login from './Login';
import SignUp from './SignUp';
import * as gameActions from '../actions/gameActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Games extends React.Component {

    constructor(props) {
        super(props);
        
        this.games = props.games;
        this.deleteGame = this.deleteGame.bind(this);
        this.saveGame = this.saveGame.bind(this);
    }

    saveGame(event) {
      event.preventDefault();
      var game = []
      game.title = this.refs.gameName.value;
      game.platform = this.refs.gamePlatform.value;
      game.rating = this.refs.gameRating.value;
      game.by = this.props.state.curruser;
      this.props.actions.saveGame(game);
      this.refs.gameForm.reset();
    }

    deleteGame(event,game) {
      event.preventDefault();
      this.props.actions.deleteGame(game);
    }


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
          <div>
            <hr/>
            <form className="gameRow" ref="gameForm" onSubmit={this.saveGame}>
              <label className="nameLabel">
              Name:     
              <input type="text" id="gameName" ref="gameName" className="form-control" required/>
              </label>
              <label className="platformLabel">
              Platform:     
              <select ref="gamePlatform" id="gamePlatform" className="form-control">
                <option value="Xbox">Xbox</option>
                <option value="PC">PC</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Switch">Switch</option>
                <option value="Other">Other</option>
              </select>
              </label>
              <label className="ratingLabel">
              Rating:     
              <select ref="gameRating" id="gameRating" className="form-control">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
              </label>
              <button type="submit" className="delete">Add Game</button>
            </form>
            <hr/>
            <div className="titleRow">
            <strong className="gameName">Title</strong><strong className="gameConsole">Preferred Platform</strong>
            <strong className="gameRating">Rating</strong>
            <strong className="byUser">Put By</strong>
            </div>
            <hr/>
            {this.props.games.map(function(game,i){
                return <Game key={i} index={i} game={game} delete={(e) => this.deleteGame(e,game)} />;
            },this)}
          </div>
        );
      }
    }
}

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);