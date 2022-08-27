import React from 'react';
import PropTypes from 'prop-types';

function VideoItem({ id, title, channel, thumbnail, onClick }) {
  return (
    <div className="item" onClick={() => onClick(id)}>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default VideoItem;
