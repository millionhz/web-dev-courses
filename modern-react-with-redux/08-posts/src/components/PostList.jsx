import React from 'react';
import Post from './Post';

function PostList() {
  const postObj = {
    title: 'Title',
    body: 'Body',
    author: 'Author',
  };

  return (
    <div>
      <Post {...postObj} />
      <Post {...postObj} />
      <Post {...postObj} />
    </div>
  );
}

export default PostList;
