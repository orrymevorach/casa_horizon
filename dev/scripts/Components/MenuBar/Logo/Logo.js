import React, { useEffect, useState } from 'react';
import { awsBucket } from '../../../app';
import classnames from 'classnames';

export default function Logo({ isNonHeaderStyling }) {
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
    <div
      className={classnames('logo-menu-bar', {
        'logo-non-header-styling': isNonHeaderStyling,
      })}>
      <img
        src={`${awsBucket}/logo-two.png`}
        alt='Casa Horizon Logo'
        style={isHomePage ? { opacity: 0.6 } : { opacity: 1 }}
      />
    </div>
  );
}
