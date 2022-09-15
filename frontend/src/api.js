import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  // TODO: https://github.com/sellmate-toy-project/sellmate-wasakbasak/pull/44#discussion_r968006090
  // baseURL: 'http://jisangdev.iptime.org:805/api',
  timeout: 3000,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
  }
});

export default api;