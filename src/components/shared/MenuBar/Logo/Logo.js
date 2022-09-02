import React from 'react';
import { awsBucket } from '../../../../constants';

export default function Logo({ pathname }) {
  return (
    <div className="logo-menu-bar">
      <img
        src={`${awsBucket}/logo-two.png`}
        alt="Casa Horizon Logo"
        style={pathname === '/' ? { opacity: 0.6 } : { opacity: 1 }}
      />
    </div>
  );
}
