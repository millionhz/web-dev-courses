import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Twitchy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Streams
        </Link>
      </div>
    </div>
  );
}

export default Header;
