import React from 'react';
import * as Minesweeper from '../minesweeper.js';

const coveredDivStyle = {
  display: 'inline-block',
  width: '20px',
  height: '20px',
  background: '#bdbdbd',
  border: 'outset',
  verticalAlign: 'top',
};

const openedDivStyle = {
  display: 'inline-block',
  width: '20px',
  height: '20px',
  background: '#bdbdbd',
  border: 'inset',
  verticalAlign: 'top',
  textAlign: 'center'
};

class Square extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const mined = this.props.square.mined;
    const openSquare = <div style={openedDivStyle}>&#x1f4a3;</div>;
    const closedSquare = <div style={coveredDivStyle}/>;
    return (
      mined ? openSquare : closedSquare
    );
  }
}

export default Square;
