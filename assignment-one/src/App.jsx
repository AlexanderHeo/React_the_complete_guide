import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    userNames: [
      { name: 'kumquatPeels' },
      { name: 'kevin bacon' },
      { name: 'piggy mcpigface' },
    ]
  }

  handleButtonClick = () => {
    this.setState({
      userNames: [
        { name: "kP" },
        { name: "k.b." },
        { name: "Sir Pigginston McPiggFace" },
      ],
    });
  }

  handleInputChange = (event) => {
    this.setState({
      userNames: [
        { name: "kumquatPeels" },
        { name: event.target.value },
        { name: "piggy mcpigface" },
      ],
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>React - the Complete Guide</h1>
        <h2>Assignment One</h2>
        <UserInput
          change={this.handleInputChange}
          name={this.state.userNames[1].name}/><br />
        <button onClick={this.handleButtonClick}>Change All Usernames</button>
        <UserOutput userName={this.state.userNames[0].name}/>
        <UserOutput userName={this.state.userNames[1].name}/>
        <UserOutput userName={this.state.userNames[2].name}/>
      </div>
    )
  }
}

export default App;
