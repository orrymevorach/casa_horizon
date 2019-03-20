import React from 'react';
import RoomsModal from './RoomsModal';
import RoomsHeader from './RoomsHeader';
import RoomsAboutUs from './RoomsAboutUs';
import RoomsCategories from './RoomsCategories';

class Rooms extends React.Component {
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

    displayRoomsModal() {
        const modal = document.getElementsByClassName("rooms-modal")[0]
        modal.style.display = "block"
    }
    
    render() {

        

        return (
            <section className="rooms">
                <RoomsHeader />

                
                {/* Body */}
                <div className="rooms-body" id="rooms-body">
                
                    <RoomsAboutUs />

                    <RoomsCategories />

                    

                    
                    <div className="building-container">
                        <div className="left">
                            {/* <img src="../img/house/cottage-inside-1.jpg" alt="sunset"/> */}
                        </div>
                        <div className="right">
                            <div className="text-container">
                                <h2>Beachfront Cottage</h2>
                                <p className="paradise">It's hard to describe paradise, but we will try...</p>
                                <p>The private Beachfront Cottage is known for its incredible views out over our beautiful Playa Escameca, which is just a 100 steps away.</p>
                                <p>The master king bedroom comes with a walk-through closet, 2 high-powered fans, an ensuite bathroom with a hot/cold shower, and an ocean view.</p>
                                <p>The cabin has an open sitting area, a large kitchen equipped with a fridge, freezer and kitchen supplies, and an enormous balcony.</p>
                            </div>
                            <div className="numbers-container-large">
                               <div className="number-container">
                                   <p className="number">6</p>
                                   <p className="number-text">Guests</p>
                               </div>
                               <div className="number-container">
                                   <p className="number">1</p>
                                   <p className="number-text">Private Bathroom</p>
                               </div>
                               <div className="number-container">
                                   <p className="number">1</p>
                                   <p className="number-text">Private Kitchen</p>
                               </div>
                               <div className="number-container">
                                   <p className="number">1</p>
                                   <p className="number-text">Balcony</p>
                               </div>
                               <div className="number-container">
                                   <p className="number">1</p>
                                   <p className="number-text">Oceanview</p>
                               </div>
                            </div>
                        </div>
                    </div>

                    <div className="cottage-container">
                        <div className="cottage cottage1">
                            <div className="overlay">
                                <h4>Sunset</h4>
                            </div>
                        </div>
                        <div className="cottage cottage2">
                            <div className="overlay">
                                <h4>Balcony</h4>
                            </div>
                        </div>
                        <div className="cottage cottage3">
                            {/* <div className="overlay">
                                <h4>Living Room</h4>
                            </div> */}
                        </div>
                        <div className="cottage cottage4">
                            <div className="overlay">
                                <h4>Master Bedroom</h4>
                            </div>
                        </div>
                        <div className="cottage cottage5">
                            <div className="overlay">
                                <h4>Kitchen</h4>
                            </div>
                        </div>
                    </div>

                    {/* Jungle House Section */}
                    <div className="jungle-house">
                        <div className="building-container">
                            <div className="left">
                                {/* <img src="../img/house/cottage-inside-1.jpg" alt="sunset"/> */}
                            </div>
                            <div className="right">
                                <div className="text-container">
                                    <h2>Jungle House</h2>
                                    <p>With a large and shared open concept kitchen, it creates a budget friendly experience so you can make your own meals how and when you would like. There are no grocery stores or ATMs in the area, please plan ahead accordingly. We do however have some local restaurants nearby, please find more descriptions and prices in our neighborhood section found below.</p>
                                    {/* <p>Rentals can be combined with multiple suites, dorm beds, our Beachfront Cottage, or at our neighbour's interconnected retreat centre, Costa Dulce.</p> */}
                                </div>
                                <div className="numbers-container-large">
                                    <div className="number-container">
                                        <p className="number">6</p>
                                        <p className="number-text">Guests</p>
                                    </div>
                                    <div className="number-container">
                                        <p className="number">2</p>
                                        <p className="number-text">Shared Bathrooms</p>
                                    </div>
                                    <div className="number-container">
                                        <p className="number">1</p>
                                        <p className="number-text">Shared Kitchen</p>
                                    </div>
                                    <div className="number-container">
                                        <p className="number">1</p>
                                        <p className="number-text">Shared Balcony</p>
                                    </div>
                                    <div className="number-container">
                                        <p className="number">0</p>
                                        <p className="number-text">Oceanview</p>
                                    </div>
                                </div>
                                <button className="button" onClick={this.displayRoomsModal}>View All Rooms</button>
                            </div>
                        </div>

                        <div className="cottage-container">
                            <div className="cottage cottage1">
                                <div className="overlay">
                                    <h4>Jungle House</h4>
                                </div>
                            </div>
                            <div className="cottage cottage2">
                                <div className="overlay">
                                    <h4>Living Room</h4>
                                </div>
                            </div>
                            <div className="cottage cottage3">
                                {/* <div className="overlay">
                                    <h4>Living Room</h4>
                                </div> */}
                            </div>
                            <div className="cottage cottage4">
                                <div className="overlay">
                                    <h4>Yoga Loft</h4>
                                </div>
                            </div>
                            <div className="cottage cottage5">
                                <div className="overlay">
                                    <h4>Shared Kitchen</h4>
                                </div>
                            </div>
                        </div>
                        <RoomsModal />
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Rooms ;