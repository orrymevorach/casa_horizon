import React from 'react';
import { NavLink } from 'react-router-dom';

class RoomsModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            rooms: [
                {
                    name: "Room 1",
                    capacity: "4",
                    price: "$30",
                    image: "../img/rooms/Room1.jpg",
                    subtext: "Watch the sunset from your hammock in this room that is perfect for families and small groups",
                    category: "private",
                    descriptors: 
                        {
                            one: "Two queen beds",
                            two: "Spectacular oceanview",
                            three: "Ensuite bathroom",
                            four: "Tranquil rainfall hot shower",
                            five: "Watch the sunset from your hammock"
                        },
                },
                {
                    name: "Room 2",
                    capacity: "2",
                    subtext: "Listen to the waves crashing below from your hammock in this room that is perfect for couples or pairs",
                    category: "private",
                    price: "$30",
                    image: "../img/rooms/Room2.jpg",
                    descriptors: {
                        one: "One king bed",
                        two: "Open air concept",
                        four: "Ensuite bathroom with tranquilo rainfall hot shower",
                        three: "Hear the waves crashing from your bed",
                        five: "Personal Hammock"
                    }
                },
                {
                    name: "Room 3",
                    capacity: "4",
                    subtext: "This room has a larger capacity and ample storage space, perfect for families and friends alike",
                    category: "private",
                    price: "$30",
                    image: "../img/rooms/Room3.jpg",
                    descriptors: {
                        one: "One queen bed, one twin bed",
                        two: "Shared bathroom with hot rainfall shower",
                        three: "Ample storage space for belongings",
                        four: "Located on the main floor outisde of the ocean, facing the courtyard",
                        five: "Ample storage space and two high powered fans"
                    }
                },
                {
                    name: "Room 4",
                    capacity: "4",
                    subtext: "This dorm style room is perfect for families, groups or solo travelers, as it includes two bunk beds with one bunk bottom being a queen",
                    category: "private",
                    price: "$30",
                    image: "../img/rooms/Room4.jpg",
                    descriptors: {
                        one: "Dorm style room",
                        two: "Shared bathroom with hot rainfall shower",
                        three: "Sleeps up to five people",
                        four: "Located on the main floor outisde of the ocean, facing the courtyard",
                        five: "Ample storage space and two high powered fans"
                    }
                },
                {
                    name: "Yoga Loft",
                    capacity: "2",
                    subtext: "Our yoga loft has a panoramic view unlike any other within Casa Horizon, and is perfect for those looking to host retreats at Casa Horizon, or for those who are looking to flow through their own self care practice",
                    category: "loft",
                    price: "$30",
                    image: "../img/rooms/Room5.jpg",
                    descriptors: {
                        one: "Beautiful panoramic view",
                        two: "Open air concept",
                        three: "Large private bathrrom with hot shower",
                        four: "Option to add one queen or multiple single beds",
                        five: "Yoga mats, bolsters, and blocks available for use"
                    }
                }
            ]
        }

        this.slideLeft = this.slideLeft.bind(this)
        this.slideRight = this.slideRight.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0,0);
        
        const logoNav = document.getElementsByClassName("logo-nav")[0]
        if(window.location.hash === "#/rooms/jungle-house") {
            logoNav.style.display = "none"
        }
    }

    componentWillUnmount() {
        const logoNav = document.getElementsByClassName("logo-nav")[0]
        logoNav.style.display = "block"
    }

    closeRoomsModal() {
        window.location.href = "/#/rooms"
        setTimeout(() => {
            const jungleHouse = document.getElementById("jungle-house")
            jungleHouse.scrollIntoView()
        }, 100);
    }

    slideRight() {
        let { index } = this.state
        index++;

        // Dont let slider exceed number of circles
        const imagesLength = document.getElementsByClassName('room-container').length - 1
        if (index > imagesLength) {
            index = 0
        }
        this.slideImage(index)

        this.setState({
            index: index
        })
    }

    slideLeft() {
        let { index } = this.state
        index--;

        // Dont let slider go below 0
        const imagesLength = document.getElementsByClassName('room-container').length - 1
        if (index < 0) {
            index = imagesLength
        }
        this.slideImage(index)

        this.setState({
            index: index
        })
    }

    slideImage(index) {
        const windowWidth = window.innerWidth
        let posX = windowWidth * index
        
        $(".room-container").css({"transform": `translateX(-${posX}px)`})
    }

    render() {

        const { rooms } = this.state

        return (
            <div className="rooms-modal">
                <div className="close-button" onClick={this.closeRoomsModal}>
                    <i className="fas fa-times"></i>
                </div>

                <div className="left-arrow left-arrow-desktop" onClick={this.slideLeft}>
                    <img src="../img/left-arrow.png" alt="Left Arrow" />
                </div>

                <div className="right-arrow right-arrow-desktop" onClick={this.slideRight}>
                    <img src="../img/right-arrow.png" alt="Right Arrow"/>
                </div>

                
                <div className="room-slider-container clearfix">
                    {rooms.map((room, index) => (
                        <div className="room-container" key={index}>
                            <div className="room-container-left">
                                <img src={room.image} alt={room.name}/>
                            </div>
                            
                            <div className="room-container-right">
                                {/* arrows only visible in */}
                                <div className="left-arrow left-arrow-mobile" onClick={this.slideLeft}>
                                    <img src="../img/left-arrow.png" alt="Left Arrow" />
                                </div>

                                <div className="right-arrow right-arrow-mobile" onClick={this.slideRight}>
                                    <img src="../img/right-arrow.png" alt="Right Arrow"/>
                                </div>
                                <div className="top-text">
                                    <h2>{room.name}</h2>
                                    {room.subtext && (
                                        <p className="subtext">{room.subtext}</p>
                                    )}
                                </div>
                                <div className="price">
                                    <p className="from">from</p>
                                    <h1>{room.price} / night</h1>
                                </div>
                                {room.descriptors && (
                                    <div className="descriptors">
                                        <div className="descriptor">
                                            <i className="fas fa-check"></i>
                                            <p>{room.descriptors.one}</p>
                                        </div>
                                        <div className="descriptor">
                                            <i className="fas fa-check"></i>
                                            <p>{room.descriptors.two}</p>
                                        </div>
                                        <div className="descriptor">
                                            <i className="fas fa-check"></i>
                                            <p>{room.descriptors.three}</p>
                                        </div>
                                        <div className="descriptor">
                                            <i className="fas fa-check"></i>
                                            <p>{room.descriptors.four}</p>
                                        </div>
                                        {room.descriptors.five && (
                                            <div className="descriptor">
                                                <i className="fas fa-check"></i>
                                                <p>{room.descriptors.five}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <a href="/#/book" target="_blank" className="modal-book-button">
                                    <button className="button">Book Now</button>
                                </a>
                            </div>
                        </div>
                    ))}  
                </div>
            </div>
        )
    }
}

export default RoomsModal ;