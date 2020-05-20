import React from 'react';
import classnames from 'classnames';

export default function Hamburger({
  setIsNavShowing,
  isNavShowing,
  onHeader,
  isMobile,
}) {
  return (
    <button
      id='ham-icon'
      onClick={() => setIsNavShowing((isShowing) => !isShowing)}
      className={classnames({
        open: isNavShowing,
        'ham-icon-mobile': !onHeader && isMobile,
      })}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
