import { createSlice } from '@reduxjs/toolkit';
import { getPosts } from '../api/jsonPlaceholder';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

// selectors
export const selectPosts = (state) => state.posts.posts;

// action
export const { setPosts } = postsSlice.actions;

// thunk
export function fetchPosts() {
  return async (dispatch) => {
    const posts = await getPosts();
    dispatch(setPosts(posts));
  };
}

// reducer
export default postsSlice.reducer;
