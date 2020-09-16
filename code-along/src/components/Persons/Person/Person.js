import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AuthContext from '../../context/auth-context';
import Aux from "../../hoc/Auxilliary";
import withClass from '../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.login)
    console.log(this.context.authenticated)
  }

  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
        {/* <AuthContext.Consumer>
        {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
      </AuthContext.Consumer> */}
        {
          this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
        }
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>
          <em>{this.props.children}</em>
        </p>
        <input
          type="text"
          // ref={inputEl => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.change}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
