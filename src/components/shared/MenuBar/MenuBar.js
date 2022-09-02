import React, { useEffect, useState, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';
import Nav from './Nav';
import classnames from 'classnames';
import Ezee from '../../BookNow/Ezee';
import useMenuScreenSize from './useMenuScreenSize';

export default function MenuBar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const { isBelowHeader, isMobile } = useMenuScreenSize();
  const menuRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // add opacity after animation fade in
    setTimeout(() => {
      menuRef.current.style.opacity = '1';
    }, 300);
  });

  const isBelowHeaderDesktop = isBelowHeader && !isMobile;

  return (
    <div
      className={classnames('menu-bar', {
        'below-header-desktop': isBelowHeaderDesktop,
      })}
      style={{ opacity: '0', animation: ' fadeIn linear 3s' }}
      ref={menuRef}
    >
      <Logo pathname={pathname} />
      <Ezee isBelowHeader={isBelowHeader} isNavShowing={isNavShowing} />

      {pathname !== '/book' && pathname !== '/jungle-house' && (
        <div className="menu-bar-right">
          <Nav
            isNavShowing={isNavShowing}
            setIsNavShowing={setIsNavShowing}
            isBelowHeaderDesktop={isBelowHeaderDesktop}
          />
          <HamburgerButton
            isNavShowing={isNavShowing}
            setIsNavShowing={setIsNavShowing}
            isBelowHeader={isBelowHeader}
            isMobile={isMobile}
          />
        </div>
      )}
    </div>
  );
}
