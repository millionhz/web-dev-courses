import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserById } from '../api/jsonPlaceholder';

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  idle: 'idle',
};

// selector
export const selectUserById = (id) => (state) => state.users.users[id];

//thunk
export const fetchUserById = createAsyncThunk(
  'users/addUser',
  async (id) => {
    return getUserById(id);
  },
  {
    condition: (id, { getState }) => {
      const { users } = getState();
      const fetchStatus = users.usersFetchStatus[id];
      return fetchStatus === status.pending || fetchStatus === status.fulfilled
        ? false
        : true;
    },
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {},
    usersFetchStatus: {},
  },
  extraReducers: {
    [fetchUserById.pending](state, action) {
      const id = action.meta.arg;
      state.usersFetchStatus[id] = status.pending;
    },
    [fetchUserById.fulfilled](state, action) {
      const id = action.meta.arg;
      state.usersFetchStatus[id] = status.fulfilled;

      state.users[id] = action.payload;
    },
    [fetchUserById.rejected](state, action) {
      const id = action.meta.arg;
      state.usersFetchStatus[id] = status.idle;
    },
  },
});

//reducer
export default usersSlice.reducer;
