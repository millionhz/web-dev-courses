import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

function VideoDetail({ video }) {
  const { snippet, player } = video;

  return (
    <div className="ui segment">
      <div className="ui embed">{parse(player.embedHtml)}</div>
      <h1 className="ui header">{snippet.title}</h1>
      <p>{snippet.channelTitle}</p>
    </div>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoDetail;
