import React from 'react';

class Game extends React.Component {
  render() {
      return(
        <div>
          <div className="gameRow">
            <strong className="gameName">{this.props.game.title}</strong>
            <strong className="gameConsole">{this.props.game.platform}</strong>
            <strong className="gameRating">{this.props.game.rating}/5</strong>
            <strong className="byUser">{this.props.game.by}</strong>
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
