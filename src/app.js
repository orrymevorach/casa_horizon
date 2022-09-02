import React from 'react';
import { render } from 'react-dom';
import 'styles/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'components/HomePage/HomePage';
import RoomsPage from 'components/Rooms/RoomsPage';
import MenuBar from 'components/shared/MenuBar/MenuBar';
import Footer from 'components/shared/Footer/Footer';
import RoomsModal from 'components/Rooms/RoomsModal/RoomsModal';

const App = () => {
  return (
    <>
      <Router>
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/rooms">
            <RoomsPage />
          </Route>
          <Route path="/jungle-house">
            <RoomsModal />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

render(<App />, document.getElementById('app'));
