import axios from 'axios';
import { key } from '../keys';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key,
    regionCode: 'US',
  },
});

export default instance;
