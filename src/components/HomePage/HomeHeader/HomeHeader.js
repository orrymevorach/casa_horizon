import React from 'react';
import { awsBucket } from '../../../constants';
import useWindowSize from '../../../hooks/useWindowSize';

export default function HomeHeader() {
  function scrollToTravelerInfo() {
    const headerHeight =
      document.getElementsByClassName('home-header')[0].clientHeight;
    if (typeof window === 'object') {
      window.scrollTo(0, headerHeight - 100);
    }
  }
  const { isMobile } = useWindowSize({
    customWidths: {
      desktop: 1000,
      mobile: 570,
    },
  });

  return (
    <header className="home-header">
      <div className="overflow-container">
        <div className="text-container">
          <div className="header-text center">
            <h1>
              Experience our beachfront paradise at
              <br />
              Casa Horizon Surf & Yoga Sanctuary,
              {!isMobile && <br />} a secluded hotel in the deep south of
              {!isMobile && <br />} Nicaragua surrounded by pristine nature.
            </h1>
            <button className="arrow-container" onClick={scrollToTravelerInfo}>
              <img
                src={`${awsBucket}/icons/header-arrow.png`}
                alt="Click To See More"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
