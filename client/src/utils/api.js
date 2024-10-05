// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001', // Change to your server's URL
});

export default api;
