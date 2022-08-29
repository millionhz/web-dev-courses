function Route({ path, children }) {
  return path === window.location.pathname ? children : null;
}

Route.defaultProps = {
  path: '/',
};

export default Route;
