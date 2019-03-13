import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HomePage/Header';
import TravelerInfo from './HomePage/TravelerInfo';
import About from './HomePage/About';
import Reviews from './HomePage/Reviews';
import Activities from './HomePage/Activities';
import Surf from './HomePage/Surf';
import Footer from './HomePage/Footer';
import firebase from 'firebase/app';
import LogoNav from './HomePage/LogoNav';
import PromoVideo from './HomePage/PromoVideo';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Rooms from './Rooms/Rooms';
import Sirvoy from './Rooms/Sirvoy';
import RoomsTwo from './Rooms/RoomsTwo';


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
      logoNav = document.getElementsByClassName("logo-nav")[0],
      bookButton = document.getElementsByClassName('book-button')[0]

    window.addEventListener('scroll', () => {
      // When on the header:
        // --> Remove non-header-styling from navigation bar 
        // --> Hide book button
      if (window.scrollY < headerHeight) {
        logoNav.classList.remove("non-header-styling")
        bookButton.style.display = "none";
      }

      //When scrolling passed the header:
        // --> Add non-header-styling and animation to nav
        // --> Show book button and include animation
      else if (window.scrollY > headerHeight) {
          logoNav.classList.add("non-header-styling")
          logoNav.style.animation = 'fadeIn linear 0.2s'
          bookButton.style.animation = 'fadeIn linear 0.2s'
          bookButton.style.display = 'block'
      }

      // Changing color of book button when its over dark section
      const middleOfWindow = window.scrollY + (window.innerHeight / 2),
        travelerInfoHeight = document.getElementsByClassName('traveler-info')[0].clientHeight,
        aboutHeight = document.getElementsByClassName('about')[0].clientHeight,
        promoHeight = document.getElementsByClassName("promo-video")[0].clientHeight,
        reviewsHeight = document.getElementsByClassName('reviews')[0].clientHeight,
        activitiesHeight = document.getElementsByClassName('activities')[0].clientHeight,
        surfHeight = document.getElementsByClassName('surf')[0].clientHeight,
        totalHeightWithoutFooter = headerHeight + travelerInfoHeight + aboutHeight + promoHeight + reviewsHeight + activitiesHeight + surfHeight
      
      
      if(middleOfWindow > headerHeight + travelerInfoHeight + aboutHeight + promoHeight && middleOfWindow < headerHeight + travelerInfoHeight + aboutHeight + promoHeight + reviewsHeight) {
        bookButton.children[0].style.color = 'white';
        bookButton.style.outline = '2px solid white';
      }
      else {
        bookButton.children[0].style.color = 'black';
        bookButton.style.outline = '2px solid black';
      }

      // Hide button if its over the footer
      if (middleOfWindow > totalHeightWithoutFooter) {
        bookButton.style.visibility = 'hidden'
      }
      else {
        bookButton.style.visibility = 'visible'
      }

    })
    
    // Add hover state to fixed book button (intentionally outside of scroll event listener)
    bookButton.addEventListener("mouseover", function() {
      bookButton.style.outline = 'none';   
      bookButton.children[0].style.color = 'white'; 
    })
  }

  render() {
    return (
      <div>

        <Router>
          <div>
          {/* LogoNav & Book Button that only display when user scrolls past the Header */}
            <LogoNav />
            
            <Route path="/" exact render={() => {
              return (
                <div className="home">
                  {/* Book Button */}
                  <div className="book-button">
                    <button className="button">Book Now</button>
                  </div>

                  <Header />
                  <TravelerInfo />
                  <About />
                  <PromoVideo />
                  <Reviews />
                  <Activities />
                  <Surf />
                </div>
              )
            }} />

            <Route path="/rooms" exact render={() => {
              return (
                <div>
                  <Rooms />
                </div>
              )
            }} />

            <Route path="/roomTwo" exact render={() => {
              return (
                <div>
                  <RoomsTwo />
                </div>
              )
            }} />

            <Route path="/sirvoy" exact render={() => {
              return (
                <Sirvoy />
              )
            }} />
            
            <Route path="/ezee" exact render={() => {
              return (
                <div><h1>Ezee</h1></div>
              )
            }}
            
            />
            
            <Route path="/" render={() => {
              return (
                <Footer />
              )
            }} />
          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
