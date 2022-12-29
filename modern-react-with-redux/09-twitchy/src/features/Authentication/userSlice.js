import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    login: (state, action) => action.payload,
    logout: () => null,
  },
});

export const selectEmail = (state) => (state.user ? state.user.email : null);

export const selectUser = (state) => state.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
