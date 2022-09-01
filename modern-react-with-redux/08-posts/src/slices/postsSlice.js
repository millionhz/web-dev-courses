import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

createAsyncThunk();

// reducer
export default postsSlice.reducer;
