import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="row">
                <div className="box box1 box-image">
                    <img src="../img/jungle-house.png" alt="Casa Horizon Jungle House"/>
                </div>
                <div className="box box2 box-text">
                    <h2>Jungle House &
                        <br></br>
                        Beachfront Cottage
                    </h2>
                    <div>
                        <p className="lh-30">Casa Horizon is a multi-leveled jungle house and beachfront cottage with breathtaking views of Nicaragua's sunsets</p>
                    </div>
                    <div className="numbers-container-large">
                        <div className="row">
                            <div className="numbers-individual-container">
                                <p className="number">100</p>
                                <p className="text">Step to the<br></br>Beach</p>
                            </div>
                            <div className="numbers-individual-container">
                                <p className="number">16</p>
                                <p className="text">Guests</p>
                            </div>
                            <div className="numbers-individual-container">
                                <p className="number">4</p>
                                <p className="text">Suites</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="numbers-individual-container">
                                <p className="number">2</p>
                                <p className="text">Kitchens</p>
                            </div>
                            <div className="numbers-individual-container">
                                <p className="number">1</p>
                                <p className="text">Yoga Studio</p>
                            </div>
                            <div className="numbers-individual-container">
                                <p className="number">20</p>
                                <p className="text">Women</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="box box3 box-text">
                    <h2>Private Beach</h2>
                    <p className="lh-30">Casa Horizon is located just a 3-minute walk away from Playa Escamaca, just a stone's throw from Costa Rica. This beach is surrounded by nothing but ocean, nature and a handful of beach bungalows. 2 hours away from San Juan Del Sure</p>
                    <button className="button">View Map</button>
                </div>
                <div className="box box4 box-image">
                    <img src="../img/private-beach.png" alt="Casa Horizon Private Beach"/>
                </div>
            </div>
        </section>
    )
}

export default About;