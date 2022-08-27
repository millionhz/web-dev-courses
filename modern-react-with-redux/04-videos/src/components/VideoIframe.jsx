import React from 'react';
import PropTypes from 'prop-types';

function VideoIframe({ video }) {
  const { snippet, player } = video;
  const iframeHtml = {
    __html: player.embedHtml,
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={iframeHtml} />
      <h1>{snippet.title}</h1>
      <p>{snippet.channelTitle}</p>
    </div>
  );
}

VideoIframe.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoIframe;
