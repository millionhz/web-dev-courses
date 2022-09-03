import { useSelector } from 'react-redux';
import { selectUserById } from '../slices/postsSlice';

function UserHeader({ id }) {
  const user = useSelector(selectUserById(id));

  return <div>{user?.name}</div>;
}

export default UserHeader;
