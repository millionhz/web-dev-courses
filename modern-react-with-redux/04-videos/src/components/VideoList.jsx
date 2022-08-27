import React from 'react';
import PropTypes from 'prop-types';

function VideoList({ videos }) {
  return (
    <ul>
      {videos.map(({ id }) => (
        <li key={id.videoId}>{id.videoId}</li>
      ))}
    </ul>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
};

export default VideoList;
