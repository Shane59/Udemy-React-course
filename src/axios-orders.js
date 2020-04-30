import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-ec261.firebaseio.com/'
});

export default instance;