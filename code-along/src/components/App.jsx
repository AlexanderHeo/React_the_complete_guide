import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid blue',
      borderRadius: '5px',
      cursor: 'pointer',
      padding: '8px'
    };

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
    }

    return (
      <div className="App">
        <h1>React - The Complete Guide: code-along</h1>
        <button
          style={style}
          onClick={this.togglePersons}>Show/Hide Persons
        </button>
        {personsList}
      </div>
    )
  }
}

export default App;
