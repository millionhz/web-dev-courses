import { useEffect, useState } from 'react';

function Route({ path, children }) {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    function onLocationChange() {
      setLocation(window.location.pathname);
    }

    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return path === location ? children : null;
}

Route.defaultProps = {
  path: '/',
};

export default Route;
