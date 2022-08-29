import React from 'react';

function Link({ href, children, className }) {
  function onLinkClick(e) {
    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a className={className} href={href} onClick={onLinkClick}>
      {children}
    </a>
  );
}

export default Link;
