import React from 'react';
import { connect } from 'react-redux';

function SongDetail({ song }) {
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

function mapStateToProps(state) {
  return {
    song: state.selectedSong,
  };
}

export default connect(mapStateToProps)(SongDetail);
