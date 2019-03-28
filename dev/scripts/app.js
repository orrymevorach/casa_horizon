import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HomePage/Header/Header';
import TravelerInfo from './HomePage/TravelerInfo/TravelerInfo';
import About from './HomePage/About/About';
import Reviews from './HomePage/Reviews/Reviews';
import Activities from './HomePage/Activities/Activities';
import Surf from './HomePage/Surf/Surf';
import Footer from './Components/Footer/Footer';
import firebase from 'firebase/app';
import LogoNav from './Components/LogoNav/LogoNav';
import PromoVideo from './HomePage/PromoVideo/PromoVideo';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RoomsPage from './Rooms/RoomsPage';
import Sirvoy from './BookNow/Sirvoy';
import RoomsTwo from './Rooms/RoomsTwo';
import RoomsHeader from './Rooms/RoomsHeader/RoomsHeader';
import ComingSoon from './ComingSoon';
import HomePage from './HomePage/HomePage';


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
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Router>
          <div>
          {/* LogoNav & Book Button that only display when user scrolls past the Header */}
            {/* <div className="version-1"> */}
              
              <Route path="/" exact render={() => {
                return (

                  <HomePage 
                    version="one"
                  />

                // <div>
                //   <div className="logo-nav-1">
                //     <LogoNav 
                //       version="1"
                //     />
                //   </div>
                
                //   <div className="home">
                //     {/* Book Button */}
                //     <a href="/book" target="_blank" className="book-button">
                //       <button className="button">Book Now</button>
                //     </a>

                //     <Header/>
                //     <TravelerInfo />
                //     <About />
                //     <PromoVideo />
                //     <Reviews />
                //     <Activities />
                //     <Surf />
                //   </div>
                //   </div>
                )
              }} />
            {/* </div> */}

            {/* <div className="version-2"> */}
              <Route path="/home-2" exact render={() => {
                return (
                  <HomePage 
                    version="two"
                  />
                  //   <div>
                // <div className="logo-nav-2">
                //   <LogoNav 
                //     version="2"
                //   />
                // </div>
                //   <div className="home">
                //     {/* Book Button */}
                //     <a href="/book" target="_blank" className="book-button">
                //       <button className="button">Book Now</button>
                //     </a>

                //     <Header/>
                //     <TravelerInfo />
                //     <About />
                //     <PromoVideo />
                //     <Reviews />
                //     <Activities />
                //     <Surf />
                //   </div>
                //   </div>
                )
              }} />
            {/* </div> */}

            <Route path="/rooms" exact render={() => {
              return (
                <div>
                  <RoomsPage />
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

            <Route path="/book" exact render={() => {
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
