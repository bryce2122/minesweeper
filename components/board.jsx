import React from 'react';
import Square from './square';

const rowDivStyle = {
  height: '25px'
};



class Board extends React.Component {

 constructor(props){
   super(props);
 }

 render(){

   return(
     <div>
       {this.props.board.grid.map((row,idx) => {
         return (
           <div key={idx} style={rowDivStyle}>
             {row.map((square,idx2) => <Square square={square}
             key={idx2}/>)}
           </div>
          );
        })}
     </div>
    );
  }
}

export default Board;
