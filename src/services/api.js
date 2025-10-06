import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburguer:user');

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;
  return config;
});
