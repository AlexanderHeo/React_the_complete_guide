import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig);
  // modify requestConfig, such as adding a header here
  return requestConfig;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(responseConfig => {
  console.log(responseConfig);
  //modify responseConfig here
  return responseConfig;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
