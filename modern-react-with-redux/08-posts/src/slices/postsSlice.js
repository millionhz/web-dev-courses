import { createSlice } from '@reduxjs/toolkit';
import { getPosts } from '../api/jsonPlaceholder';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    addPosts(state, action) {
      state.posts.push(action.payload);
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

// selectors
export const selectPosts = (state) => state.posts;

// action
export const { addPosts, setPosts } = postsSlice.actions;

// thunk
export function fetchPosts(num = 5) {
  return (dispatch) => {
    getPosts().then((posts) => {
      dispatch(setPosts(posts.splice(0, num)));
    });
  };
}

// reducer
export default postsSlice.reducer;
