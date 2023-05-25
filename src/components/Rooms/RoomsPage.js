import React from 'react';
import RoomsAboutUs from './RoomsAboutUs/RoomsAboutUs';
import RoomsCategories from './RoomsCategories/RoomsCategories';
import JungleHouse from './JungleHouse/JungleHouse';
import BeachfrontCottage from './BeachfrontCottage/BeachfrontCottage';
import BuildingContainer from './BuildingContainer/BuildingContainer';

class RoomsPage extends React.Component {
  render() {
    return (
      <section className="rooms">
        <RoomsAboutUs />

        <RoomsCategories />

        <BuildingContainer section="jungle">
          <JungleHouse />
        </BuildingContainer>

        <BuildingContainer section="beachfront">
          <BeachfrontCottage />
        </BuildingContainer>
      </section>
    );
  }
}

export default RoomsPage;
