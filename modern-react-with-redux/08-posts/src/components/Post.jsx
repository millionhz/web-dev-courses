import React from 'react';

function Post({ title, body, author }) {
  return (
    <div className="item">
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description"></div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Post;
