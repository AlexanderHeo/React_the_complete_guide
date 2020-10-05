import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

const ulStyle = {
  width: '100%',
  display: 'flex',
  listStyle: 'none'
}
const liStyle = {
  margin: "0 auto",
  padding: "16px",
};

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <NavLink
                    to="/courses/"
                    exact
                    activeStyle={{
                      textDecoration: "underline",
                      color: "orange",
                    }}
                  >
                    Courses
                  </NavLink>
                </li>
                <li style={liStyle}>
                  <NavLink
                    to="/users/"
                    exact
                    activeStyle={{
                      textDecoration: "underline",
                      color: "orange",
                    }}
                  >
                    Users
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
