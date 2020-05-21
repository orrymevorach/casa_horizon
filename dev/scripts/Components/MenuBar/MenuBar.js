import React, { useEffect, useState, useRef } from 'react';
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

      <div className='menu-bar-right'>
        <Nav
          isNavShowing={isNavShowing}
          setIsNavShowing={setIsNavShowing}
          isNonHeaderStyling={isNonHeaderStyling}
        />
        <HamburgerButton
          isNavShowing={isNavShowing}
          setIsNavShowing={setIsNavShowing}
          onHeader={onHeader}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}
