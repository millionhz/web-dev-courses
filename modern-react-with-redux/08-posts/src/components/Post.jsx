import React from 'react';
import UserHeader from './UserHeader';

function Post({ title, body, userId }) {
  return (
    <div className="item">
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description"></div>
        <h2>{title}</h2>
        <p>{body}</p>
        <UserHeader id={userId} />
      </div>
    </div>
  );
}

export default Post;
