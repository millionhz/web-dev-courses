import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, selectUserById } from '../slices/postsSlice';

function UserHeader({ id }) {
  const user = useSelector(selectUserById(id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  return <div>{user?.name}</div>;
}

export default UserHeader;
