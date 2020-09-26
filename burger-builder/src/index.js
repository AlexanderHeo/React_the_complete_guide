import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class ReactApp extends React.Component {
  render() {
    return <App />
  }
}

ReactDOM.render(
  <ReactApp />,
  document.querySelector('#root')
);
