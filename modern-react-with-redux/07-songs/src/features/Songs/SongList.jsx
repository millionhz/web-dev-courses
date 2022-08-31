import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSongs, changeCurrentSong } from './songSlice';

function SongList() {
  const songs = useSelector(selectSongs);
  const dispatch = useDispatch();

  return (
    <div className="ui segment container">
      <div className="ui divided items">
        {songs &&
          songs.map((song) => (
            <div key={song.title} className="item">
              <div className="ui image"></div>
              <div className="middle aligned content">
                <div className="header">{song.title}</div>
              </div>
              <button
                className="ui right floated primary button"
                onClick={() => dispatch(changeCurrentSong(song))}
              >
                Select
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SongList;
