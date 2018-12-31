import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Nav';
import Header from './Components/Header';
import TravelerInfo from './Components/TravelerInfo';
import About from './Components/About';
import Reviews from './Components/Reviews';
import Activities from './Components/Activities';
import Surf from './Components/Surf';
import Footer from './Components/Footer';
import firebase from 'firebase/app';

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

    this.state = {
      index: 0
    }
  }

  // Used to initial styling for Activities Section
  componentDidMount() {
    // Initial width of text container in activities to fit the first word
    const width = document.getElementsByClassName('textIndex-0')[0].clientWidth
    document.getElementsByClassName('text-container-large')[0].style.width = `${width}px`

    // Initial width of image container small, which holds all the images and needs to be as long as all of them combined
    const numberOfImages = document.getElementsByClassName('activities-images').length
    const containerWidth = 360 * numberOfImages
    $('.image-container-small').css({ 'width': `${containerWidth}px` })
    

    const circlesContainer = document.getElementById('circles-container')
    const images = document.getElementsByClassName('activities-images')
    for(let i = 0; i < images.length; i++) {
      const circle = document.createElement('div')
      circle.setAttribute("class", `circle circle-${i}`)
      circle.style.height = "10px"
      circle.style.width = "10px"
      circle.style["background-color"] = "black"
      circle.style.border = "1px solid black"
      circle.style["border-radius"] = "50%"
      circle.style.margin = "20px 15px 0 0"
      circlesContainer.appendChild(circle)
    }

    $('.circle-0').css({ 'background-color': 'white' })

  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <TravelerInfo />
        <About />
        <Reviews />
        <Activities 
          index={this.state.index}
        />
        <Surf />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
