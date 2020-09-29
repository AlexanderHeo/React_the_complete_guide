import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-3ea54.firebaseio.com/'
});

export default instance;
