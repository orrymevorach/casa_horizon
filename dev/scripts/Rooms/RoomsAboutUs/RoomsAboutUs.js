import React from 'react';

class RoomsAboutUs extends React.Component {
    render() {
        return (
            <div className="about-us" id="rooms-about-us">
                <h2>Staying With Us</h2>
                <div className="about-us-main">
                    <div className="left">
                        <p>Casa Horizon was built with an eco-friendly design to minimize our footprint on the environment. Built from the ground up with prestine craftsmanship, our space is immersed within nature while mainting a luxurious experience.</p>
                        <br/>
                        <p> We embrace a charming and easy going environment, with respectful staff ready to accommodate your every need. Immerse yourself in tranquility with the stunning sunsets that overlook Playa Escameca and the surf breaks found 100 steps down to the beach.</p>
                        <br/>
                        <p>Guests can rent out the Beachfront Cottage, suites or dorm beds within our 5 Bedroom Jungle House, or a combination of both. Rentals can also be combined with rooms at our neighbour's interconnected retreat centre, Costa Dulce.</p>
                    </div>
                    <div className="right">
                        <div className="descriptors">
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Flexible rental options</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Private rooms</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Dorm rooms</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Cottage rental</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Kitchen facilities</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Onsite restaurant</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Luxury immersed in nature</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default RoomsAboutUs ;