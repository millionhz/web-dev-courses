import React from 'react';
import PropTypes from 'prop-types';

function VideoDetail({ video }) {
  const { snippet, player } = video;
  const iframeHtml = {
    __html: player.embedHtml,
  };

  return (
    <div className="ui segment">
      <div className="ui embed" dangerouslySetInnerHTML={iframeHtml} />
      <h1 className="ui header">{snippet.title}</h1>
      <p>{snippet.channelTitle}</p>
    </div>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoDetail;
