import React from 'react';
import Header from './Header/Header';
import TravelerInfo from './TravelerInfo/TravelerInfo';
import About from './About/About';
import PromoVideo from './PromoVideo/PromoVideo';
import Reviews from './Reviews/Reviews';
import Activities from './Activities/Activities';
import Surf from './Surf/Surf';

class HomePage extends React.Component {
    render() {
        return (
            <div className="home">
                {/* Book Button */}
                <a href="/book" target="_blank" className="book-button">
                    <button className="button">Book Now</button>
                </a>

                <Header/>
                <TravelerInfo />
                <About />
                <PromoVideo />
                <Reviews />
                <Activities />
                <Surf />
            </div>
        )
    }
}

export default HomePage ;