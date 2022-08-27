import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

function VideoList({ videos, onItemClick }) {
  return (
    <div className="ui items">
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} onClick={onItemClick} />
      ))}
    </div>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
};

export default VideoList;
