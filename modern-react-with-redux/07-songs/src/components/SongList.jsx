import React from 'react';

function SongList() {
  return (
    <div className="ui segment container">
      <div className="ui divided items">
        <div className="item">
          <div className="ui image"></div>
          <div className="middle aligned content">
            <div className="header">Content A</div>
          </div>
          <button className="ui right floated button">Select</button>
        </div>
      </div>
    </div>
  );
}

export default SongList;
