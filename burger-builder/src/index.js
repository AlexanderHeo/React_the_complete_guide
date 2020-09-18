import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class ReactApp extends React.Component {
  render() {
    return <App />
  }
}

ReactDOM.render(
  <ReactApp />,
  document.querySelector('#root')
);
