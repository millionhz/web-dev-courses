import axios from 'axios';
import { access } from '../keys';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${access}`,
  },
});
