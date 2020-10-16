import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';

const store = createStore(burgerBuilderReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
