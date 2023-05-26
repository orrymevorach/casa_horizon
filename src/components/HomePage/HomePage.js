import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import TravelerInfo from './TravelerInfo/TravelerInfo';
import About from './About/About';
import PromoVideo from './PromoVideo/PromoVideo';
import Reviews from './Reviews/Reviews';
import Activities from './Activities/Activities';
import Surf from './Surf/Surf';
import BookButton from 'components/shared/BookButton/BookButton';
import PlayaEscamacaHighlight from 'components/HomePage/PlayaEscamacaHighlight/PlayaEscamacaHighlight';

export default function HomePage() {
  return (
    <div className="home">
      <BookButton />

      <HomeHeader />
      <TravelerInfo />
      <About />
      <PlayaEscamacaHighlight />
      <PromoVideo />
      <Reviews />
      <Activities />
      <Surf />
    </div>
  );
}
