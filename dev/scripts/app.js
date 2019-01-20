import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import TravelerInfo from './Components/TravelerInfo';
import About from './Components/About';
import Reviews from './Components/Reviews';
import Activities from './Components/Activities';
import Trial from './Components/Trial';
import Surf from './Components/Surf';
import Footer from './Components/Footer';
import firebase from 'firebase/app';
import LogoNav from './Components/LogoNav';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDKF69O_DQ5eatbEXy-H7lArnyoUqYTg4E",
  authDomain: "casa-horizon.firebaseapp.com",
  databaseURL: "https://casa-horizon.firebaseio.com",
  projectId: "casa-horizon",
  storageBucket: "casa-horizon.appspot.com",
  messagingSenderId: "267399139758"
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // Hiding and Showing LogoNav when user scrolls past Header Section
    const headerHeight = document.getElementsByTagName('header')[0].clientHeight
    const fixedSection = document.getElementsByClassName('fixed-section')
    
    window.addEventListener('scroll', () => {
      if (window.scrollY < headerHeight) {
        for (let i = 0; i < fixedSection.length; i++) {
          fixedSection[i].style.display = 'none'
        }
      }
      else if (window.scrollY > headerHeight) {
        for (let i = 0; i < fixedSection.length; i++) {
          fixedSection[i].style.animation = 'fadeIn linear 0.2s'
          fixedSection[i].style.display = 'block'
        }
      }
    })

  }

  render() {
    return (
      <div>
        {/* LogoNav & Book Button that only display when user scrolls past the Header */}
          <div className="fixed-section fixed-nav">
            <LogoNav />
          </div>
          
          <div className="fixed-section fixed-book-button">
            <button className="button">Book Now</button>
          </div>
        
        
        <Header />
        <TravelerInfo />
        <About />
        <Reviews />
        <Activities />
        {/* <Trial /> */}
        <Surf />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
