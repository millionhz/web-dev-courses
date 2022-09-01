import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, fetchPosts } from '../slices/postsSlice';

import Post from './Post';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts?.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
}

export default PostList;
