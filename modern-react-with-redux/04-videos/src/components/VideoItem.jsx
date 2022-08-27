import React from 'react';
import PropTypes from 'prop-types';

function VideoItem({ title, channel, thumbnail }) {
  return (
    <div className="item">
      <div className="ui small image">
        <img alt="" src={thumbnail} />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <span className="channel">{channel}</span>
        </div>
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  title: PropTypes.string,
  channel: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default VideoItem;
