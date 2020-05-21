import React, { useEffect, useState, useRef, useContext } from 'react';
import { RouteContext } from '../../context/routeContext';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';
import Nav from './Nav';
import classnames from 'classnames';
import Ezee from '../../BookNow/Ezee';
import useMenuScreenSize from './useMenuScreenSize';

export default function MenuBar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const { onHeader, isMobile } = useMenuScreenSize();
  const menuRef = useRef(null);
  const route = useContext(RouteContext);

  useEffect(() => {
    // add opacity after animation fade in
    setTimeout(() => {
      menuRef.current.style.opacity = '1';
    }, 300);
  });

  const isNonHeaderStyling = !onHeader && !isMobile;

  return (
    <div
      className={classnames('menu-bar', {
        'non-header-styling': isNonHeaderStyling,
      })}
      style={{ opacity: '0', animation: ' fadeIn linear 3s' }}
      ref={menuRef}>
      <Logo isNonHeaderStyling={isNonHeaderStyling} />
      {/* <Ezee /> */}

      {route !== '/book' && (
        <div className='menu-bar-right'>
          <Nav
            isNavShowing={isNavShowing}
            setIsNavShowing={setIsNavShowing}
            isNonHeaderStyling={isNonHeaderStyling}
            route={route}
          />
          <HamburgerButton
            isNavShowing={isNavShowing}
            setIsNavShowing={setIsNavShowing}
            onHeader={onHeader}
            isMobile={isMobile}
            route={route}
          />
        </div>
      )}
    </div>
  );
}
