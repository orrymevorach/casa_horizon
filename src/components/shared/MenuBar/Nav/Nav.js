import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
export default function Nav({
  isNavShowing,
  setIsNavShowing,
  isBelowHeaderDesktop,
}) {
  return (
    <nav
      className={classnames('nav', {
        'nav-below-header-desktop': isBelowHeaderDesktop,
        'fadeIn show': isNavShowing,
      })}
    >
      <ul
        id="ham-menu"
        onClick={() => setIsNavShowing((isShowing) => !isShowing)}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Our Rooms</Link>
        </li>
        <li>
          <a
            href="https://live.ipms247.com/booking/book-rooms-casahorizon"
            target="_blank"
          >
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
