import React from 'react';
import RoomsHeader from './RoomsHeader/RoomsHeader';
import RoomsAboutUs from './RoomsAboutUs/RoomsAboutUs';
import RoomsCategories from './RoomsCategories/RoomsCategories';
import JungleHouse from './JungleHouse/JungleHouse';
import BeachfrontCottage from './BeachfrontCottage/BeachfrontCottage';
import ImagesSlider from './ImagesSlider/ImagesSlider';
import RoomsModal from './RoomsModal/RoomsModal';
import BuildingContainer from './BuildingContainer/BuildingContainer';

class RoomsPage extends React.Component {
    componentDidMount() {

        // Make all category images the same as the shortest height
        setTimeout(() => {
            const images = document.getElementsByClassName("category-image")
            const array = []
            
            for(let key in images) {
                if(typeof images[key] === "object") {
                    array.push(images[key].firstChild.clientHeight)
                }
            }

            const shortestImageHeight = Math.min.apply(null, array)
            
            for(let key in images) {
                if(typeof images[key] === "object") {
                    images[key].firstChild.style.height = `${shortestImageHeight}px`

                }
            }

        }, 500);

    }

    render() {

        return (
            <section className="rooms">
                <RoomsModal />
                
                {/* <RoomsHeader /> */}
                
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