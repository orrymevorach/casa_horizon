import React from 'react';
import { awsBucket } from '../../app';

export default function HomeHeader() {
  function scrollToTravelerInfo() {
    const headerHeight = document.getElementsByClassName('home-header')[0]
      .clientHeight;
    if (typeof window === 'object') {
      window.scrollTo(0, headerHeight - 100);
    }
  }

  return (
    <header className='home-header'>
      <div className='overflow-container'>
        <div className='text-container'>
          <div className='header-text center'>
            <h1>
              Experience rustic luxury at
              <br></br>
              Casa Horizon Surf & Yoga Luxury Hostel,
              <br></br>a secluded paradise in the
              <br></br>
              deep south of Nicaragua.
            </h1>
            <div className='arrow-container' onClick={scrollToTravelerInfo}>
              <img
                src={`${awsBucket}/icons/header-arrow.png`}
                alt='Click To See More'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
