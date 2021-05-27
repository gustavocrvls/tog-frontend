import axios from 'axios';

const api = axios({
  baseURL: process.env.REACT_APP_API,
});

export { api };
