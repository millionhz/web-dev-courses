import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientId } from '../../keys';
import { selectUser, login } from './userSlice';

const authState = {
  idle: 'idle',
  processing: 'processing',
  success: 'success',
  failed: 'failed',
};

function GoogleAuth() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [state, setState] = useState(authState.idle);

  const handleCredentialResponse = useCallback(
    (response) => {
      dispatch(login(response.credential));
      setState(authState.success);
    },
    [dispatch]
  );

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
      auto_select: true,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { type: 'button', theme: 'outline', size: 'large', shape: 'circle' }
    );

    window.google.accounts.id.prompt((notification) => {
      const { processing, failed } = authState;
      if (notification.isDisplayed()) {
        setState(processing);
      } else if (notification.isNotDisplayed()) {
        setState(failed);
      }
    });
  }, [handleCredentialResponse]);

  return state !== authState.processing && !user && <div id="buttonDiv" />;
}

export default GoogleAuth;
