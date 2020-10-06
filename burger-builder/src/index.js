import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

class ReactApp extends React.Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

ReactDOM.render(
  <ReactApp />,
  document.querySelector('#root')
);
