import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

function VideoList({ videos, onItemClick }) {
  return (
    <div className="ui items">
      {videos.map(({ id, snippet }) => (
        <VideoItem
          key={id.videoId}
          id={id.videoId}
          title={snippet.title}
          channel={snippet.channelTitle}
          thumbnail={snippet.thumbnails.medium.url}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
};

export default VideoList;
