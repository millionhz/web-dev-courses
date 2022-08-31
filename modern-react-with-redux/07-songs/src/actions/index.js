export const type = {
  SONG_SELECTED: 'SONG_SELECTED',
};

export function selectSong(songObj) {
  return {
    type: type.SONG_SELECTED,
    payload: songObj,
  };
}
