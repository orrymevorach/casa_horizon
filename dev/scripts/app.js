import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import exports from './firebaseConfig';
import HomePage from './HomePage/HomePage';
import RoomsPage from './Rooms/RoomsPage';
import RoomsModal from './Rooms/RoomsModal/RoomsModal';
import Sirvoy from './BookNow/Sirvoy';
import MenuBar from './Components/MenuBar/MenuBar';
import Footer from './Components/Footer/Footer';
import { RouteContextProvider } from './context/routeContext';

export const awsBucket = 'https://casa-horizon.s3.ca-central-1.amazonaws.com';

firebase.initializeApp(exports.config);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RouteContextProvider>
        <Router>
          <div>
            <MenuBar />

            <Route path='/' exact render={() => <HomePage />} />

            <Route path='/rooms' exact render={() => <RoomsPage />} />

            <Route
              path='/rooms/jungle-house'
              exact
              render={() => <RoomsModal />}
            />

            {/* <Route
            path='/book'
            exact
            render={() => (
              <Sirvoy />
            )}
          /> */}

            <Route path='/' render={() => <Footer />} />
          </div>
        </Router>
      </RouteContextProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
