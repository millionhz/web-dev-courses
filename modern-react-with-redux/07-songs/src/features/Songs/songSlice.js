import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: {
    currentSong: null,
    songs: [
      {
        title: 'Starboy',
        length: '3:00',
      },
      {
        title: 'Teenage Fever',
        length: '2:45',
      },
      {
        title: 'Liability',
        length: '1:45',
      },
    ],
  },
  reducers: {
    changeCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const selectSongs = (state) => state.songs;
export const selectCurrentSong = (state) => state.currentSong;

export const { changeCurrentSong } = songSlice.actions;

export default songSlice.reducer;
