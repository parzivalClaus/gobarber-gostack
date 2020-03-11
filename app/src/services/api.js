import axios from 'axios';

import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'http://192.168.0.204:3333',
});

export default api;
