import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentSong } from './songSlice';

function SongDetail() {
  const song = useSelector(selectCurrentSong);

  return (
    <div className="ui segment container">
      {song ? (
        <>
          <h1>{song.title}</h1>
          <h3>{song.length}</h3>
        </>
      ) : (
        <h1>No Song Selected</h1>
      )}
    </div>
  );
}

export default SongDetail;
