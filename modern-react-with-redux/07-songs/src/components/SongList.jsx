import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

function SongList({ songs, selectSong }) {
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
                onClick={() => selectSong(song)}
              >
                Select
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
