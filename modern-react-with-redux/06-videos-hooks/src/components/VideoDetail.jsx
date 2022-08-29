import React from 'react';
import PropTypes from 'prop-types';

function VideoDetail({ video }) {
  const { snippet, player } = video;

  return (
    <div className="ui segment">
      <div
        className="ui embed"
        dangerouslySetInnerHTML={{ __html: player.embedHtml }}
      />
      <h1 className="ui header">{snippet.title}</h1>
      <p>{snippet.channelTitle}</p>
    </div>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoDetail;
