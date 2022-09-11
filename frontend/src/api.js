import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
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
// var data = JSON.stringify({
//   "email": "kej@gmail.com",
//   "nick_name": "은진",
//   "picture": "https://lh3.googleusercontent.com/a-/AFdZucp3oBxqxQTMKur87EpqEzTg9pRdRaRKENriq78RVA=s96-c",
//   "floor": "3",
//   "type": "basic",
//   "uid": "114536513260079860389"
// });

// var config = {
//   method: 'post',
//   url: 'http://localhost:8000/auth/join',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

export default api;