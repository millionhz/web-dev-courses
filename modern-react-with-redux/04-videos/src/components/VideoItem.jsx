import React from 'react';
import PropTypes from 'prop-types';

function VideoItem({ video, onClick }) {
  const {
    snippet: { title, channelTitle, thumbnails },
  } = video;

  return (
    <div className="item" onClick={() => onClick(video)}>
      <div className="ui small image">
        <img alt="" src={thumbnails.medium.url} />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <span className="channel">{channelTitle}</span>
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
