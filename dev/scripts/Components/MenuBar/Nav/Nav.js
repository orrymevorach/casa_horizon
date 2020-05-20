import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
export default function Nav({
  isNavShowing,
  setIsNavShowing,
  isNonHeaderStyling,
}) {
  return (
    <nav
      className={classnames('nav', {
        'nav-non-header-styling': isNonHeaderStyling,
        'fadeIn show': isNavShowing,
      })}>
      <ul
        id='ham-menu'
        onClick={() => setIsNavShowing((isShowing) => !isShowing)}>
        <NavLink to='/'>
          <li className='nav-links'>Home</li>
        </NavLink>
        <NavLink to='/rooms'>
          <li className='nav-links'>Our Rooms</li>
        </NavLink>
        <NavLink to='/book' target='_blank'>
          <li className='nav-links'>Book Now</li>
        </NavLink>
      </ul>
    </nav>
  );
}
