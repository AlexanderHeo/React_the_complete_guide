import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';


class App extends Component {
  render() {
    return (
      // default basename is '/', otherwise set to path
      // alexheo.com/my-app would use basename='/my-app'
      // <BrowserRouter basename='/my-app'>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
