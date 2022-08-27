import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

function VideoList({ videos }) {
  return (
    <div className="ui items">
      {videos.map(({ id, snippet }) => (
        <VideoItem
          key={id.videoId}
          title={snippet.title}
          channel={snippet.channelTitle}
          thumbnail={snippet.thumbnails.medium.url}
        />
      ))}
    </div>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
};

export default VideoList;
