import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducer from './store/reducer';

const store = createStore(reducer);

class ReactApp extends React.Component {
  render() {
    return (
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
    );
  }
}

ReactDOM.render(
  <ReactApp />,
  document.querySelector('#root')
);
