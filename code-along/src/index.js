import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class ReactApp extends Component {
  render() {
    return <App appTitle="Person Manager" />
  }
}

ReactDOM.render(
  <ReactApp />,
  document.querySelector('#root')
);
