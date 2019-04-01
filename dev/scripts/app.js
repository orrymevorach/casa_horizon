import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import firebase from 'firebase/app';
import exports from './firebaseConfig';
import HomePage from './HomePage/HomePage';
import RoomsPage from './Rooms/RoomsPage';
import Sirvoy from './BookNow/Sirvoy';
import LogoNav from './Components/LogoNav/LogoNav';
import Footer from './Components/Footer/Footer';

firebase.initializeApp(exports.config);

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <HashRouter>
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
        </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
