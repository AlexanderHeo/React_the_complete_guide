import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const reducer = combineReducers({
	counter: counterReducer,
	result: resultReducer
})
const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
);

registerServiceWorker();
