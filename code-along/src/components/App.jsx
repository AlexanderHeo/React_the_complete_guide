import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from './Cockpit/Cockpit';
import AuthContext from './context/auth-context';
import Aux from './hoc/Auxilliary';
import withClass from './hoc/withClass';
import Persons from './Persons/Persons';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: "hsadf", name: "kumquatPeels", age: 28 },
      { id: "adsfh", name: "Fender", age: 13 },
      { id: "litd", name: "Shadow", age: 32 },
    ],
    otherState: 'unchanged other state',
    isPersonDisplayed: false,
    showCockpit: true,
    counter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // Deprecated Lifecyle Hook
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  // Most used Lifecyle Hooks
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

  handleNameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    /*
    when setting state depends on old state
    use the following syntax of passing in prevState
    */
    this.setState((prevState, props) => {
      return {
        persons: persons,
        counter: prevState.counter + 1
      }
    });
  }

  togglePersons = () => {
    this.setState({
      isPersonDisplayed: !this.state.isPersonDisplayed
    });
  }

  handleDeletePerson = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  handleLogIn = () => {
    this.setState({
      authenticated: !this.state.authenticated
    });
  }

  render() {
    console.log('[App.js] render');
    let personsList = (<p>Click the button</p>);

    if (this.state.isPersonDisplayed) {
      personsList = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.handleDeletePerson}
            changed={this.handleNameChange}
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }

    return (
      <Aux>
        {/* button to show the cleanup work in [Cockpit.js] useEffect */}
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.handleLogIn
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.isPersonDisplayed}
              clicked={this.togglePersons}
            />
          ) : null}
          {personsList}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
