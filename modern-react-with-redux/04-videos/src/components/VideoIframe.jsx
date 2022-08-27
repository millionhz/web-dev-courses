import React from 'react';
import PropTypes from 'prop-types';

function VideoIframe({ video }) {
  const { id } = video;
  return (
    <iframe
      src={`http://www.youtube.com/embed/${id.videoId}`}
      title="YouTube video player"
      frameBorder="0"
      width="560px"
      height="315px"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

VideoIframe.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoIframe;
