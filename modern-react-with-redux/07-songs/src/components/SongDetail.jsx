import React from 'react';

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

export default SongDetail;
