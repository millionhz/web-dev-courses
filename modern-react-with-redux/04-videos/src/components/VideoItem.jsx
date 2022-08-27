import React from 'react';
import PropTypes from 'prop-types';

function VideoItem({ video, onClick }) {
  const { snippet } = video;

  return (
    <div className="item" onClick={() => onClick(video)}>
      <div className="ui small image">
        <img alt="" src={snippet.thumbnails.medium.url} />
      </div>
      <div className="content">
        <div className="header">{snippet.title}</div>
        <div className="meta">
          <span className="channel">{snippet.channelTitle}</span>
        </div>
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  video: PropTypes.object,
  onClick: PropTypes.func,
};

export default VideoItem;
