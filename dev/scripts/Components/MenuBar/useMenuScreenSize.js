import React, { useEffect, useState } from 'react';
import { debounce } from '../../utils';

export default function useMenuScreenSize() {
  const [isMobile, setIsMobile] = useState(false);
  const [isBelowHeader, setIsBelowHeader] = useState(true);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    function setMobile() {
      setIsMobile(windowWidth < 570);
    }

    function setHeader() {
      setIsBelowHeader(window.scrollY > windowHeight);
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
  return {
    isMobile,
    isBelowHeader,
  };
}
