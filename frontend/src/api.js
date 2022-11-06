import axios from 'axios';
const api = axios.create({
  // TODO: https://github.com/sellmate-toy-project/sellmate-wasakbasak/pull/44#discussion_r968006090
  // 임시
  baseURL: window.location.hostname === 'localhost' ? process.env.REACT_APP_DEV_HOST : process.env.REACT_APP_API_HOST,
  timeout: 3000,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});

export default api;
