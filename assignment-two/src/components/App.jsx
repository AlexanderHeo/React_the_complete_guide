import React, { Component } from 'react';
import Char from './Char';
import Validation from './Validation';

class App extends Component {
  state = {
    inputLength: 0,
    inputValue: ''
  };

  countInputLength = (event) => {
    let value = event.target.value;
    let length = event.target.value.length;
    this.setState({
      inputLength: length,
      inputValue: value,
    });
  }

  deleteChar = (index) => {
    const inputValue = this.state.inputValue.split('');
    inputValue.splice(index, 1);
    this.setState({
      inputValue: inputValue.join(''),
      inputLength: inputValue.length,
    });
  }

  render() {

    const inputArray = this.state.inputValue.split('');
    const length = this.state.inputLength;

    const charList = inputArray.map((char, index) => {
      return <Char
        char={char}
        key={index}
        click={() => this.deleteChar(index)}/>;
    });

    return (
      <div className="app">
        <h1>Assignment Two - Lists and Conditionals, yo</h1>
        <form>
          <label htmlFor="input">Input:</label>
          <input
            type="text"
            name="input"
            value={this.state.inputValue}
            onChange={this.countInputLength}/>
        </form>
        <p>input value: {this.state.inputValue}</p>
        <p>length of input: {length}</p>
        <Validation length={length}/>
        {charList}
      </div>
    )
  }
}

export default App;
