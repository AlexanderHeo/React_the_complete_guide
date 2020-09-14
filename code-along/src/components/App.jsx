import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';


const StyledButton = styled.button`
  background-color: ${props => props.clickedStyle ? 'red' : 'green'};
  color: #eee;
  font: inherit;
  border: 3px solid #00ffff;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.clickedStyle ? 'pink' : 'lightgreen'};
    color: #222;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "hsadf", name: "kumquatPeels", age: "infinite" },
      { id: "adsfh", name: "Fender", age: "13" },
      { id: "litd", name: "Shadow", age: "unknown" },
    ],
    otherState: 'unchanged other state',
    isPersonDisplayed: false,
  }

  handleClick = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "infinite" },
        { name: "Fender", age: "13" },
        { name: "Wednesday", age: "48" },
      ],
    });
  }

  nameChanger = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersons = () => {
    this.setState({
      isPersonDisplayed: !this.state.isPersonDisplayed
    });
  }

  handleDeletePerson = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: '#eee',
    //   font: 'inherit',
    //   border: '3px solid #00ffff',
    //   borderRadius: '5px',
    //   cursor: 'pointer',
    //   padding: '8px',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: '#222',
    //   }
    // };

    let personsList = (<p>Click the button</p>);
    if (this.state.isPersonDisplayed) {
      personsList = (
        <div>
          {this.state.persons.map((person) => {
            return <Person
                click={() => this.handleDeletePerson(person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChanger(event, person.id)} />
          })}
        </div>
      );
      // style.backgroundColor = "#ff0000";
      // style.border = "3px solid #ff00ff";
      // style[':hover'] = {
      //   backgroundColor: '#ff00ff',
      //   color: '#0022ff'
      // }
    }

    const colorClass = [];
    if (this.state.persons.length <= 2) {
      colorClass.push('red');
    }
    if (this.state.persons.length <= 1) {
      colorClass.push('bold');
    }

    return (
      <div className="App">
        <h1>React - The Complete Guide: code-along</h1>
        <p className={colorClass.join(' ')}>by Max, on Udemy</p>
        <StyledButton
          // style={style}
          clickedStyle={this.state.isPersonDisplayed}
          onClick={this.togglePersons}>Show/Hide Persons
        </StyledButton>
        {personsList}
      </div>
    )
  }
}

export default App;
