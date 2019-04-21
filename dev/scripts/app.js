import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase/app';
import exports from './firebaseConfig';
import HomePage from './HomePage/HomePage';
import RoomsPage from './Rooms/RoomsPage';
import RoomsModal from './Rooms/RoomsModal/RoomsModal';
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
        <Router>
          <div>
          
            <LogoNav />
            
            <Route path="/" exact render={() => (
              <HomePage />
            )} />

            <Route path="/rooms" exact render={() => (
              <RoomsPage />
            )} />

            <Route path="/rooms/jungle-house" exact render={() => (
              <RoomsModal />
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
