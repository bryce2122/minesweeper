import React from 'react';
import Board from './board';
import Form from './form';
import * as Minesweeper from '../minesweeper.js';

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  margin: "0 auto",
  width: "100%"
  };
const buttonStyle = {
  width: "100px"
  };

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: "", gameInSession: false};
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);

  }

  startGame(height,width,bombs){
    this.setState(
      {
        board: new Minesweeper.Board(height,width,bombs),
        gameInSession: true
      }
    );
  }

  newGame(){
    this.setState({gameInSession: false});
  }

  render() {
    return(
      this.state.gameInSession ?
        <div style={containerStyle}>
          <Board board={this.state.board}/>
          <button style={buttonStyle} onClick={this.newGame}>New Game</button>
       </div>
       :
      <Form startGame={this.startGame}/>
    );
  }
}

export default Game;
