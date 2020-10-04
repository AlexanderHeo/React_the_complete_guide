import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/courses/"
                    exact>Courses</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/users/"
                    exact>Users</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path='/courses' component={Courses} />
            <Route path='/users' component={Users} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
