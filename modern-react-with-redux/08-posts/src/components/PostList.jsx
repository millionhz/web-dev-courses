import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../api/jsonPlaceholder';
import { selectPosts, setPosts } from '../slices/postsSlice';

import Post from './Post';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    getPosts().then((posts) => {
      dispatch(setPosts(posts.slice(0, 5)));
    });
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
