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
export function fetchPostsAndUsers() {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // wait for the posts

    const userIds = getState().posts.map((post) => post.userId);
    const uniqueUserIds = [...new Set(userIds)];

    uniqueUserIds.forEach((id) => dispatch(fetchUserById(id)));
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    const posts = await getPosts();
    dispatch(setPosts(posts));
  };
}

export function fetchUserById(id) {
  return async (dispatch) => {
    const user = await getUserById(id);
    dispatch(addUser(user));
  };
}

// reducer
export default postsSlice.reducer;
