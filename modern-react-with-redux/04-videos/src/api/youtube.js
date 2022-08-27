import axios from 'axios';

const key = 'AIzaSyA4uyU2JlM6k5CaCV1N707XRBDGsIejhX8';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key,
  },
});

export default instance;
