import React from 'react';

function SongList({ songs, onSelectSong }) {
  return (
    <div className="ui segment container">
      <div className="ui divided items">
        {songs.map((song) => (
          <div key={song.title} className="item">
            <div className="ui image"></div>
            <div className="middle aligned content">
              <div className="header">{song.title}</div>
            </div>
            <button
              className="ui right floated button"
              onClick={() => onSelectSong(song)}
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
