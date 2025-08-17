import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://dummyjson.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instanceAxios; 
