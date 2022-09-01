import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: null,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

// selectors
export const selectPosts = (state) => state.posts;

// action
export const { setPosts } = postsSlice.actions;

// reducer
export default postsSlice.reducer;
