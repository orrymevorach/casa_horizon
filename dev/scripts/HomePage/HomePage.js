import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import TravelerInfo from './TravelerInfo/TravelerInfo';
import About from './About/About';
import PromoVideo from './PromoVideo/PromoVideo';
import Reviews from './Reviews/Reviews';
import Activities from './Activities/Activities';
import Surf from './Surf/Surf';
import BookButton from '../Components/BookButton/BookButton';
import Ezee from '../BookNow/Ezee';

class HomePage extends React.Component {
  render() {
    return (
      <div className='home'>
        <BookButton />

        <HomeHeader />
        <TravelerInfo />
        <Ezee />
        <About />
        <PromoVideo />
        <Reviews />
        <Activities />
        <Surf />
      </div>
    );
  }
}

export default HomePage;
