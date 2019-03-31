import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Components/Footer/Footer';
import firebase from 'firebase/app';
import LogoNav from './Components/LogoNav/LogoNav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RoomsPage from './Rooms/RoomsPage';
import Sirvoy from './BookNow/Sirvoy';
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
        <Router>
          <div>
          {/* LogoNav & Book Button that only display when user scrolls past the Header */}
            <LogoNav />
            
            <Route path="/" exact render={() => (
              <HomePage />
            )} />
            

            <Route path="/rooms" exact render={() => (
              <RoomsPage />
            )} />

            <Route path="/book" exact render={() => (
              <Sirvoy />
            )} />
            
            <Route path="/" render={() => (
              <Footer />
            )} />
            
          </div>
        </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
