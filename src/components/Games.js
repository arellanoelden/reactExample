import React from 'react';
import Game from './Game';
import Login from './Login';
import * as gameActions from '../actions/gameActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class Games extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {
        //  games: [["Halo 5","XBOX ONE","4/5"],["Fortnite","PC","4.5/5"],["Overwatch","PC","5/5"]]
        //}
        
        this.deleteGame = this.deleteGame.bind(this);
        this.saveGame = this.saveGame.bind(this);
    }

    saveGame(event) {
      event.preventDefault();
      //console.log(this.props.games);
      var game = []
      game.title = this.refs.gameName.value;
      game.platform = this.refs.gamePlatform.value;
      game.rating = this.refs.gameRating.value;
      this.props.actions.saveGame(game);
      this.refs.gameForm.reset();
    }

    deleteGame(event,game) {
      event.preventDefault();
      this.props.actions.deleteGame(game);
    }


    render() {
      //this.setState({games:this.props.games});
     // if(this.props.state.loggedIn === false) {
     //   return <div><Login login={this.props.state.login} /></div>;
     // }
     // else {
       console.log(this.props); 
        return (
          <div>
            <hr/>
            <form className="gameRow" ref="gameForm" onSubmit={this.saveGame}>
              <label className="nameLabel">
              Game Name:     
              <input type="text" id="gameName" ref="gameName" className="form-control" required/>
              </label>
              <label className="platformLabel">
              Platform:     
              <input type="text" id="gamePlatform" ref="gamePlatform" className="form-control" required/>
              </label>
              <label className="ratingLabel">
              Rating:     
              <input type="text" id="gameRating" ref="gameRating" className="form-control" required/>
              </label>
              <button type="submit" className="delete">Add Game</button>
            </form>
            <hr/>
            <div className="titleRow">
            <strong className="gameName">Title</strong><strong className="gameConsole">Preferred Platform</strong><strong className="gameRating">Ratingsss</strong>
            </div>
            <hr className="linebreak" />
            {this.props.games.map(function(game,i){
                return <Game key={i} index={i} game={game} delete={(e) => this.deleteGame(e,game)} />;
            },this)}
          </div>
        );
      }
    //}
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