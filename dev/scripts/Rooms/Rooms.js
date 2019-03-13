import React from 'react';

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
    
    render() {

        const categories = [
            // {
            //     name: "Dorm Room",
            //     price: "$30",
            //     description: "Solo travelers & Groups",
            //     capacity: "1 - 4",
            //     imageUrl: "../img/rooms/Room4.jpg"
            // },
            {
                name: "Jungle House",
                price: "$30",
                description: "Couples, Families & Groups",
                capacity: "1 - 5",
                imageUrl: "../img/house/balcony-sunset.jpg"
            },
            // {
            //     name: "Yoga Loft",
            //     price: "$30",
            //     description: "Couples, Families, Groups & Yoga Retreats",
            //     capacity: "1 - 4",
            //     imageUrl: "../img/rooms/Room5.jpg"
            // },
            {
                name: "Beachfront Cottage",
                price: "$30",
                description: "Couples, Families & Groups",
                capacity: "1 - 4",
                imageUrl: "../img/house/casa-courtyard.jpg"
            }
        ]

        const rooms = [
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
            },
            {
                name: "Beachfront Cottage",
                capacity: "3",
                subtext: "The private Beach Cabin is known for its incredible views out over our beautiful Playa Escameca which is just a 100 steps away. It will make a cozy home for a family or group of friends",
                category: "cottage",
                price: "$30",
                image: "../img/rooms/Room6.jpg",
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
            

        const filteredRooms = rooms.filter((category, index) => {
            if(category.category === "private") {
                return true;
            }
        })

        console.log(filteredRooms)

        return (
            <section className="rooms">
                {/* Header */}
                <header className="rooms-header">
                    <video autoPlay loop>
                        <source src="../img/rooms/video.MOV"/>
                    </video>
                    <a href="#rooms-body">
                        <div className="arrow-container" >
                            <img src="../img/header-arrow.png" alt="Click To See More"/>
                        </div>
                    </a>
                </header>

                <div className="about-us">
                    <h2>About Casa Horizon</h2>
                    <p>Casa Horizon is a multi-level jungle house with an eco-friendly design to minimize our footprint. With intentional craftsmanship our space has been designed amongst nature, while maintaining luxury as a part of your experience. We embrace a charming and easy going environment, with respectful staff ready to accommodate your every need. Immerse yourself in tranquility with the stunning sunsets that overlook Playa Escameca and the surf breaks found 100 steps down to the beach.</p>
                </div>
                {/* Body */}
                <div className="rooms-body" id="rooms-body">
                    <h2 className="room-categories-title">Room Categories</h2>
                    <div className="room-categories-container">
                        {categories.map((category, index) => (
                            <div className="room-category" key={index} id={`room-category-${index}`}>
                                <div className="overlay">
                                    <h3>{category.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    
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
                                <p>Rentals can also be combined with suites or dorm beds in our 5-bedroom Jungle House, or at our neighbour's interconnected retreat centre, Costa Dulce.</p>
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
                                    <p>Rentals can be combined with multiple suites, dorm beds, our Beachfront Cottage, or at our neighbour's interconnected retreat centre, Costa Dulce.</p>
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
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Rooms ;