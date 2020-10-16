import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import orderReducer from './store/reducers/orderReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
	burgerBuilderReducer: burgerBuilderReducer,
	orderReducer: orderReducer
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

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
