import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export async function getPosts() {
  const res = await instance.get('/posts');
  return res.data;
}

export async function getUserById(id) {
  const res = await instance.get(`/users/${id}`);
  return res.data;
}

export default instance;
