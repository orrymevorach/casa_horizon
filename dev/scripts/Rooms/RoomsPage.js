import React from 'react';
import RoomsAboutUs from './RoomsAboutUs/RoomsAboutUs';
import RoomsCategories from './RoomsCategories/RoomsCategories';
import JungleHouse from './JungleHouse/JungleHouse';
import BeachfrontCottage from './BeachfrontCottage/BeachfrontCottage';
import ImagesSlider from './ImagesSlider/ImagesSlider';
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
                
                <ImagesSlider 
                    section="jungle"
                />

                <BuildingContainer section="beachfront">
                    <BeachfrontCottage />
                </BuildingContainer>
                
                <ImagesSlider 
                    section="beachfront"
                />

            </section>
        )
    }
}

export default RoomsPage ;