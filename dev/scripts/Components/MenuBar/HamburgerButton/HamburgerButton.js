import React from 'react';
import classnames from 'classnames';

export default function Hamburger({
  setIsNavShowing,
  isNavShowing,
  isBelowHeader,
  isMobile,
}) {
  return (
    <button
      id='ham-icon'
      onClick={() => setIsNavShowing((isShowing) => !isShowing)}
      className={classnames({
        open: isNavShowing,
        'ham-icon-mobile': isBelowHeader && isMobile,
      })}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
