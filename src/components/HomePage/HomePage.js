import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import TravelerInfo from './TravelerInfo/TravelerInfo';
import About from './About/About';
import PromoVideo from './PromoVideo/PromoVideo';
import Reviews from './Reviews/Reviews';
import Activities from './Activities/Activities';
import Surf from './Surf/Surf';
import BookButton from 'components/shared/BookButton/BookButton';
import CasaHorizonHighlight from 'components/HomePage/CasaHorizonHighlight/CasaHorizonHighlight';

export default function HomePage() {
  return (
    <div className="home">
      <BookButton />

      <HomeHeader />
      <TravelerInfo />
      <About />
      <CasaHorizonHighlight />
      <PromoVideo />
      <Reviews />
      <Activities />
      <Surf />
    </div>
  );
}
