import { type } from '../actions';

export function songsReducer() {
  return [
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
  ];
}

export function selectSongReducer(currentSelectedSong = null, action) {
  if (action.type === type.SONG_SELECTED) {
    return action.payload;
  }

  return currentSelectedSong;
}
