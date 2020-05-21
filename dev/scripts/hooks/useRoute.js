import React, { useEffect, useState } from 'react';

export default function useRoute() {
  const [route, setRoute] = useState('');
  useEffect(() => {
    if (window && typeof window === 'object') {
      const page = window.location.hash.replace('#', '');
      setRoute(page);
    }
  }, []);
  return route;
}
