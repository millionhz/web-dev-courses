import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import GoogleAuth from '../features/Authentication/GoogleAuth';

function Header() {
  return (
    <>
      <div className="ui secondary pointing menu my-4">
        <Link to="/" className="item">
          Twitchy
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
