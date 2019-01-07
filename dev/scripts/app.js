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
    const headerHeight = document.getElementsByTagName('header')[0].clientHeight
    
    const fixedNav = document.getElementsByClassName('fixed-nav')[0]
    document.addEventListener('scroll', () => {
      if(window.scrollY < headerHeight) {
        fixedNav.style.display = 'none'
      }
      else if(window.scrollY > headerHeight) {
        fixedNav.style.display = 'block'
      }
    })
  }

  render() {
    return (
      <div>
        <div className="fixed-nav">
          <LogoNav />
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
