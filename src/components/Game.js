import React from 'react';

class Game extends React.Component {
  render() {
      return(
        <div>
          <div className="gameRow">
            <strong className="gameName">{this.props.index + 1}: {this.props.game.title}</strong>
            <strong className="gameConsole">{this.props.game.platform}</strong>
            <strong className="gameRating">{this.props.game.rating}</strong>
            <form className="delete" onSubmit={this.props.delete}> <button>Delete</button></form>
          </div>
          <div className="editRow">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      );
  }
}
export default Game;
