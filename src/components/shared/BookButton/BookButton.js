import React from 'react';
import useWindowSize from '../../../hooks/useWindowSize';

export default function BookButton() {
  const { isMobile } = useWindowSize({});
  if (isMobile) return;
  return (
    <a href="/book-now" className="book-button">
      <button className="button">Book Now</button>
    </a>
  );
}
