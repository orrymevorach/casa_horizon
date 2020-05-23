import React, { useEffect, useState } from 'react';
import { awsBucket } from '../../../app';

export default function Logo() {
  const [isHomePage, setIsHomePage] = useState(true);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  });
  return (
    <div className='logo-menu-bar'>
      <img
        src={`${awsBucket}/logo-two.png`}
        alt='Casa Horizon Logo'
        style={isHomePage ? { opacity: 0.6 } : { opacity: 1 }}
      />
    </div>
  );
}
