import React, { useState, useEffect } from 'react';

const initWidths = {
  desktop: 1000,
  mobile: 850,
};
export default function useWindowSize({ customWidths }) {
  const [device, setDevice] = useState('');
  const [config, setConfig] = useState(initWidths);

  useEffect(() => {
    if (customWidths) {
      if (
        customWidths.desktop !== config.desktop ||
        customWidths.mobile !== config.mobile
      ) {
        setConfig(customWidths);
      }
    }
  }, [customWidths]);

  console.log('config', config);

  useEffect(() => {
    function getDevice() {
      let device = '';
      if (window.innerWidth <= config.mobile) device = 'mobile';
      if (
        window.innerWidth <= config.desktop &&
        window.innerWidth > config.mobile
      )
        device = 'tablet';
      if (window.innerWidth > config.desktop) device = 'desktop';
      setDevice(device);
    }

    window.addEventListener('resize', getDevice);
    getDevice();

    return () => window.removeEventListener('resize', getDevice);
  }, []);
  return {
    device,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  };
}
