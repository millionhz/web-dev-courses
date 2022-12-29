import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { clientId } from '../../keys';
import { login, logout, selectUserId } from './userSlice';

function GoogleAuth() {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const handleCredentialResponse = useCallback(
    (response) => {
      dispatch(login(jwtDecode(response.credential)));
    },
    [dispatch]
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
      auto_select: true,
    });

    window.google.accounts.id.prompt();
  }, [handleCredentialResponse]);

  useEffect(() => {
    window.google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { type: 'button', theme: 'outline', size: 'large', shape: 'circle' }
    );
  });

  if (userId) {
    return (
      <button
        type="button"
        className="item"
        onClick={handleLogout}
        style={{ cursor: 'pointer' }}
      >
        Logout
      </button>
    );
  }

  return <div id="buttonDiv" />;
}

export default GoogleAuth;
