import React from 'react';
import RoomsAboutUs from './RoomsAboutUs/RoomsAboutUs';

class RoomsTwo extends React.Component {
    componentDidMount() {
        // shift and hide each sides of the room containers right away
        const left = document.getElementsByClassName("room-container-left")
        const right = document.getElementsByClassName("room-container-right")

        setTimeout(() => {
            for(let room in right) {
                right[room].classList.add("shift-and-hide-right-boxes")
                left[room].classList.add("shift-and-hide-left-boxes")
            }
        }, 500);

        // create an array 
        // All rows will be the same height, in this case, the height of the first room container
        // push the height value into the array for each room container
        const animationArray = []
        const roomContainer = document.getElementsByClassName("room-container")
        const heightOfIndividualContainer = roomContainer[0].clientHeight
        for(let i = 0; i < roomContainer.length; i++) {
            if(typeof roomContainer[i] === "object") {
                animationArray.push(heightOfIndividualContainer)
            }
        }
        
        // manipulate the value of each height to reflect the exact spot on the page that the animation should begin for each individual room container
        const headerHeight = document.getElementsByClassName("rooms-header")[0].clientHeight
        const newArray = animationArray.map((rowHeight, index) => {
            return headerHeight + (rowHeight * index) + (rowHeight * 3 / 4);
        })

        // an event listener to trigger the animation for each row
        window.addEventListener('scroll', () => {
            const bottomOfWindow = window.scrollY + window.innerHeight

            for(let key in newArray) {
                if( bottomOfWindow > newArray[key]) {
                  left[key].classList.add('animate-left')
                  right[key].classList.add('animate-right')
                }
                else {
                  left[key].classList.remove('animate-left')
                  right[key].classList.remove('animate-right')
                }
            }
        })
    }

    render() {
        const rooms = [
            {
                name: "Room 1",
                building: "Jungle House",
                capacity: "4",
                price: "$30",
                image: "../img/Rooms/Room1.jpg",
                subtext: "Watch the sunset from your hammock in this room that is perfect for families and small groups",
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
                building: "Jungle House",
                capacity: "2",
                subtext: "Listen to the waves crashing below from your hammock in this room that is perfect for couples or pairs",
                price: "$30",
                image: "../img/Rooms/Room2.jpg",
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
                building: "Jungle House",
                capacity: "4",
                subtext: "This room has a larger capacity and ample storage space, perfect for families and friends alike",
                price: "$30",
                image: "../img/Rooms/Room3.jpg",
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
                building: "Jungle House",
                capacity: "4",
                subtext: "This dorm style room is perfect for families, groups or solo travelers, as it includes two bunk beds with one bunk bottom being a queen",
                price: "$30",
                image: "../img/Rooms/Room4.jpg",
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
                price: "$30",
                image: "../img/Rooms/Room5.jpg",
                descriptors: {
                    one: "Beautiful panoramic view",
                    two: "Open air concept",
                    three: "Large private bathrrom with hot shower",
                    four: "Option to add one queen or multiple single beds",
                    five: "Yoga mats, bolsters, and blocks available for use"
                }
            },
            {
                name: "Beachfront Cottage",
                capacity: "3",
                subtext: "The private Beach Cabin is known for its incredible views out over our beautiful Playa Escameca which is just a 100 steps away. It will make a cozy home for a family or group of friends",
                price: "$30",
                image: "../img/Rooms/Room6.jpg",
                descriptors: {
                    one: "Includes 1 master king bedroom with walk in closet",
                    two: "Large private kitchen equpped with fridge/freezer and cooking supplies",
                    two: "Living room with sofa sitting area (or single bed)",
                    three: "Master bathroom with hot shower and and ocean View",
                    four: "Huge private balcony with open air concept, overlooking the ocean",
                    five: "Private hammock on balcony"
                }
            }
        ]

        return (
            <section className="rooms rooms-two">
                <header className="rooms-header">
                    <video autoPlay loop>
                        <source src="../img/Rooms/video.MOV"/>
                    </video>
                    <a href="#rooms-body">
                        <div className="arrow-container" >
                            <img src="../img/header-arrow.png" alt="Click To See More"/>
                        </div>
                    </a>
                </header>

                <div className="split-container">
                    <div className="left">
                        <h2 className="room-title">Jungle House</h2>
                        <p>The Jungle House is our beautiful shared space that has both private rooms and dorm rooms. All guests staying in the jungle house are free to use the shared kitchen space, living room area, and the balcony hammocks for beautiful views of the sunsets overlooking Playa Escamaca. All guests also have access to our onsite restaurant at our neighbors interconnected retreat center, Costa Dulce.</p>
                        <br/>
                        <p>Guests can rent out single suites, multiple suites, or dorm beds within our 5 Bedroom Jungle House, and can also combine rentals with the Beachfront Cottage, Yoga Loft, or Costa Dulce.</p>
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
                                <p>Shared kitchen facilities</p>
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
                        <button className="button">View Rooms</button>
                    </div>
                    <div className="right">
                        <h2 className="room-title">Beachfront Cottage</h2>
                        {/* <p className="paradise">It's hard to describe paradise, but we will try...</p> */}
                        <p>The master king bedroom comes with a walk-through closet, 2 high-powered fans, an ensuite bathroom with a hot/cold shower, and an ocean view.</p>
                        <br/>
                        <p>The private Beachfront Cottage is known for its incredible views out over our beautiful Playa Escameca, which is just a 100 steps away.</p>
                        <br/>
                        <p>The cabin has an open sitting area, a large kitchen equipped with a fridge, freezer and kitchen supplies, and an enormous balcony.</p>
                        <div className="descriptors">
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Private Cottage</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Private kitchen facilities</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Private living room</p>
                            </div>
                            <div className="descriptor">
                                <i className="fas fa-check"></i>
                                <p>Flexible rental options</p>
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
                        <button className="button">View Cottage</button>
                        
                    </div>
                </div>
                        

              {rooms.map((room, index) => {
                  if(room.building === "Jungle House") {

                      return (
                        <div className="room-container" key={index}>
                            <div className="room-container-left">
                                <img src={room.image} alt={room.name}/>
                            </div>
                            
                            <div className="room-container-right">
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
                                <button className="button">Book Now</button>
                            </div>
                        </div>
                      )
                  }
                })}  

                <h2 className="room-title-yoga">Yoga Loft</h2>
                {rooms.map((room, index) => {
                  if(room.name === "Yoga Loft") {

                      return (
                        <div className="room-container" key={index}>
                            <div className="room-container-left">
                                <img src={room.image} alt={room.name}/>
                            </div>
                            
                            <div className="room-container-right">
                                <div className="top-text">
                                    {/* <h2>{room.name}</h2> */}
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
                                <button className="button">Book Now</button>
                            </div>
                        </div>
                      )
                  }
                })}  

                
              <h2 className="room-title-cottage">Beachfront Cottage</h2>
              {rooms.map((room, index) => {
                  if(room.name === "Beachfront Cottage") {

                      return (
                        <div className="room-container" key={index}>
                            <div className="room-container-left">
                                <img src={room.image} alt={room.name}/>
                            </div>
                            
                            <div className="room-container-right">
                                <div className="top-text">
                                    {/* <h2>{room.name}</h2> */}
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
                                <button className="button">Book Now</button>
                            </div>
                        </div>
                      )
                  }
                })}  

            </section>
        )
    }
}

export default RoomsTwo;

