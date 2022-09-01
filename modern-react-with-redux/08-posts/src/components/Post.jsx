import React from 'react';

function Post({ title, body, author }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <h3>{author}</h3>
    </div>
  );
}

export default Post;
