import React from 'react';

class About extends React.Component {
    componentDidMount() {
        // Selecting Individal Box Elements To Animate
        const boxOne = document.getElementsByClassName('box1')[0],
            boxTwo = document.getElementsByClassName('box2')[1],
            boxThree = document.getElementsByClassName('box3')[0],
            boxFour = document.getElementsByClassName('box4')[0]
        
        // Initial Styling for boxes to shift off to the sides and opacity = 0
        boxOne.classList.add('shift-and-hide-left-boxes')
        boxThree.classList.add('shift-and-hide-left-boxes')
        boxTwo.classList.add('shift-and-hide-right-boxes')
        boxFour.classList.add('shift-and-hide-right-boxes')

        // Defining Heights of Header, TravellerInfo Section and Row One
        const headerHeight = document.getElementsByTagName('header')[0].clientHeight,
            travellerInfoHeight = document.getElementsByClassName('traveler-info')[0].clientHeight,
            rowOneHeight = document.getElementsByClassName('about-row-one')[0].clientHeight
        
        // Defining Animation Starting Points for Each Row
        const animationStartRowOne = headerHeight + travellerInfoHeight + (boxOne.clientHeight / 4),
            animationStartRowTwo = headerHeight + travellerInfoHeight + rowOneHeight + (boxThree.clientHeight / 4)

        window.addEventListener('scroll', () => {
            // Variable to pinpoint bottom of the window
            const bottomOfWindow = window.scrollY + window.innerHeight
            
            // Animation for Row 1
            if (bottomOfWindow > animationStartRowOne) {
                boxOne.classList.add('animate-box1')
                boxTwo.classList.add('animate-box2')
            }
            else {
                boxOne.classList.remove('animate-box1')
                boxTwo.classList.remove('animate-box2')
            }
            
            // Animation for Row 2
            if (bottomOfWindow > animationStartRowTwo) {
                boxThree.classList.add('animate-box3')
                boxFour.classList.add('animate-box4')
            }
            else {
                boxThree.classList.remove('animate-box3')
                boxFour.classList.remove('animate-box4')
            }
        })

    }
    
    render() {

        return (
            <section className="about" id="about">
                <div className="row about-row-one">
                    <div className="box box1 box-image">
                        <img src="../img/homepage/jungle-house.png" alt="Casa Horizon Jungle House"/>
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
                                    <p className="text">Steps to the<br></br>Beach</p>
                                </div>
                                <div className="numbers-individual-container">
                                    <p className="number">16</p>
                                    <p className="text">Guests</p>
                                </div>
                                <div className="numbers-individual-container">
                                    <p className="number">6</p>
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
                                    <p className="number">4</p>
                                    <p className="text">Large Patios</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row about-row-two">
                    <div className="box box3 box-text">
                        <h2>Private Beach</h2>
                        <p className="lh-30">Casa Horizon is located just a 3-minute walk away from beautiful Playa Escamaca, with Costa Rica visible in the distance. This beach is surrounded by nothing but ocean, nature and a handful of beach bungalows, yet only 25 minutes away from San Juan Del Sur town.</p>
                        <a className="button" href="https://www.google.com.ph/maps/place/Casa+Horizon/@11.1723439,-85.8123801,17z/data=!3m1!4b1!4m5!3m4!1s0x8f75b1d791843085:0x838f3792db65c563!8m2!3d11.1723386!4d-85.8101914" target="_blank">View Map</a>
                    </div>
                    <div className="box box4 box-image">
                        <img src="../img/homepage/private-beach.png" alt="Casa Horizon Private Beach"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;