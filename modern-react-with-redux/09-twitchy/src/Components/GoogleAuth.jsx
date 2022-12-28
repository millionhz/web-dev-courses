import React, { useEffect, useState } from 'react';
import { clientId } from '../keys';

const authState = {
  idle: 'idle',
  processing: 'processing',
  success: 'success',
  failed: 'failed',
};

function GoogleAuth() {
  const [token, setToken] = useState(null);
  const [state, setState] = useState(authState.idle);

  const handleCredentialResponse = (response) => {
    setToken(response.credential);
    setState(authState.success);
  };

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
  }, []);

  return state !== authState.processing && !token && <div id="buttonDiv" />;
}

export default GoogleAuth;
