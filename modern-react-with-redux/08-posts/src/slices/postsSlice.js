import { createSlice } from '@reduxjs/toolkit';
import { getPosts, getUserById } from '../api/jsonPlaceholder';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    users: {},
  },
  reducers: {
    addPosts(state, action) {
      state.posts.push(action.payload);
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
    addUser(state, action) {
      const { id } = action.payload;
      state.users[id] = action.payload;
    },
  },
});

// selectors
export const selectPosts = (state) => state.posts;
export const selectUserById = (id) => (state) => state.users[id];
// action
export const { addPosts, setPosts, addUser } = postsSlice.actions;

// thunk
export function fetchPosts() {
  return (dispatch) => {
    getPosts().then((posts) => {
      dispatch(setPosts(posts));
    });
  };
}

export function fetchUserById(id) {
  return (dispatch, getState) => {
    if (getState().users[id]) return;

    getUserById(id).then((user) => {
      dispatch(addUser(user));
    });
  };
}

// reducer
export default postsSlice.reducer;
