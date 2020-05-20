import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';
import Nav from './Nav';
import classnames from 'classnames';
import { debounce } from '../../utils';
import Ezee from '../../BookNow/Ezee';

export default function MenuBar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [onHeader, setOnHeader] = useState(true);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    function setMobile() {
      setIsMobile(windowWidth < 570);
    }

    function setHeader() {
      setOnHeader(window.scrollY < windowHeight);
    }

    setMobile();
    setHeader();

    window.addEventListener('resize', debounce(setMobile, 100));
    window.addEventListener('scroll', debounce(setHeader, 100));

    return () => {
      window.removeEventListener('resize', debounce(setMobile, 100));
      window.removeEventListener('scroll', debounce(setHeader, 100));
    };
  });

  const isNonHeaderStyling = !onHeader && !isMobile;

  return (
    <div
      className={classnames('menu-bar', {
        'non-header-styling': isNonHeaderStyling,
      })}>
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
