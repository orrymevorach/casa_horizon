import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
export default function Nav({ isNavShowing, isBelowHeaderDesktop }) {
  return (
    <nav
      className={classnames('nav', {
        'nav-below-header-desktop': isBelowHeaderDesktop,
        'fadeIn show': isNavShowing,
      })}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Our Rooms</Link>
        </li>
        <li>
          <Link to="/book-now">Book Now</Link>
        </li>
      </ul>
    </nav>
  );
}
