import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import TravelerInfo from './Components/TravelerInfo';
import About from './Components/About';
import Reviews from './Components/Reviews';
import Activities from './Components/Activities';
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
    const headerHeight = document.getElementsByTagName('header')[0].clientHeight,
      fixedSection = document.getElementsByClassName('fixed-section'),
      fixedBookButton = document.getElementsByClassName('fixed-book-button')[0]
    
    window.addEventListener('scroll', () => {
      // Hiding and Showing LogoNav when user scrolls past Header Section
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
      // Changing color of book button when its over dark section
      const middleOfWindow = window.scrollY + (window.innerHeight / 2),
        travelerInfoHeight = document.getElementsByTagName('section')[0].clientHeight,
        aboutHeight = document.getElementsByTagName('section')[1].clientHeight,
        reviewsHeight = document.getElementsByTagName('section')[2].clientHeight,
        activitiesHeight = document.getElementsByTagName('section')[3].clientHeight,
        surfHeight = document.getElementsByTagName('section')[4].clientHeight,
        totalHeightWithoutFooter = headerHeight + travelerInfoHeight + aboutHeight + reviewsHeight + activitiesHeight + surfHeight
      
      
      if(middleOfWindow > headerHeight + travelerInfoHeight + aboutHeight && middleOfWindow < headerHeight + travelerInfoHeight + aboutHeight + reviewsHeight) {
        fixedBookButton.children[0].style.color = 'white';
        fixedBookButton.style.outline = '2px solid white';
      }
      else {
        fixedBookButton.children[0].style.color = 'black';
        fixedBookButton.style.outline = '2px solid black';
      }

      // Hide button if its over the footer
      if (middleOfWindow > totalHeightWithoutFooter) {
        fixedBookButton.style.visibility = 'hidden'
      }
      else {
        fixedBookButton.style.visibility = 'visible'
      }

    })
    
    // Add hover state to fixed book button (intentionally outside of scroll event listener)
    fixedBookButton.addEventListener("mouseover", function() {
      fixedBookButton.style.outline = 'none';   
      fixedBookButton.children[0].style.color = 'white'; 
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
        <Surf />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
