import React from 'react';

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "200px",
  margin: "0 auto"
  };

class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {height:"",width:"",bombs:""};
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    e.preventDefault();
    const height = this.state.height;
    const width = this.state.width;
    const bombs = this.state.bombs;
    this.props.startGame(height,width,bombs);
  }

  update(property) {

    return e => {
      const value = parseInt(e.target.value);
      if(!isNaN(value)){
        return this.setState({ [property]: parseInt(e.target.value) });
      }
      else{
          return this.setState({ [property]:e.target.value});
        }
    };
  }

  render() {
    return(
      <form style={formStyle}>
        <input
          type="text"
          placeholder="height"
          value={this.state.height}
          onChange={this.update('height')}
        />
        <input
          type="text"
          placeholder="width"
          value={this.state.width}
          onChange={this.update('width')}
        />
        <input
          type="text"
          placeholder="bombs"
          value={this.state.bombs}
          onChange={this.update('bombs')}
        />
        <button onClick={this.handleClick}>Create Game</button>
      </form>
    );
  }
}

export default Form;
