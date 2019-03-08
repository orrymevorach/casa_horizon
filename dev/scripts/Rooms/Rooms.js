import React from 'react';

class Rooms extends React.Component {
    render() {

        const rooms = [
            {
                name: "Room 1",
                capacity: "4",
                price: "$30",
                image: "../img/rooms/Room1.jpg",
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
                capacity: "2",
                description: "This open air concept room features one king bed suitable for a couple looking for a tranquilo experience. It includes an ensuite bathroom with a hot rainfall shower, two high-powered fans, secure storage for personal items and, a personal hammock. A highlight of this room is the close connection to nature as you listen and watch the crashing waves as the sky paints another day.",
                price: "$30",
                image: "../img/rooms/Room2.jpg"
            },
            {
                name: "Room 3",
                capacity: "4",
                description: "This room features both a queen and twin bed, suitable for families and friends alike. This space is located on the main floor outside of the ocean facing courtyard. Your hot rainfall shower is located within a shared bathroom directly outside your room. This room includes ample and secure storage for all belongings, and two high-powered fans to keep you cool during your stay.",
                price: "$30",
                image: "../img/rooms/Room3.jpg"
            },
            {
                name: "Room 4",
                capacity: "4",
                description: "This dorm style room can accommodate up to 4 people, may that be a group or individual solo travelers, as it includes two bunk beds with one bunk bottom being a queen. This room includes ample storage for all personal belongings and high-powered fans to keep you cool during your stay. Your hot/cold rainfall shower is located within a shared bathroom directly outside your room. This room is located on the main floor outside of the ocean facing courtyard.",
                price: "$30",
                image: "../img/rooms/Room4.jpg"
            },
            {
                name: "Room 5",
                capacity: "2",
                description: "Our yoga loft has a panoramic view unlike any other within Casa Horizon. It includes a large private bathroom with hot/cold shower, along with options to add a queen bed or multiple single beds to transform into a bedroom. This spacious open air room is complete with yoga mats, bolsters and, blocks. This space is available for those looking to host retreats at Casa Horizon or, for those who are looking to flow through their own self care practice.",
                price: "$30",
                image: "../img/rooms/Room5.jpg"
            },
            {
                name: "Beachfront Cottage",
                capacity: "3",
                description: "The private Beach Cabin is known for its incredible views out over our beautiful Playa Escameca which is just a 100 steps away. This space includes 1 master king bedroom with a walk-through closet, 2 high-powered fans and a sofa sitting area (or single bed). There is an attached master bathroom with a private hot/cold shower with an ocean view. The Cabin has an open sitting area and large kitchen equipped with fridge/freezer and kitchen supplies, making a cozy home for a family or group of friends looking to enjoy. Soak up ocean views while relaxing in a hammock from your large covered patio. The open air design keeps you cool while connecting you with nature and its lullaby of crashing waves.",
                price: "$30",
                image: "../img/rooms/Room6.jpg"
            }
        ]

        return (
            <section className="rooms">
                <header>
                    <div className="overlay">
                        <div className="video-container">
                            <video controls autoPlay>
                                <source src="../img/rooms/video.MOV"/>
                            </video>
                        </div>
                    </div>
                </header>
                {rooms.map((room, index) => (
                    <div className="room-container" key={index}>
                        <div className="left">
                            <img src={room.image} alt={room.name}/>
                        </div>
                        
                        <div className="right">
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
                                        <i class="fas fa-check"></i>
                                        <p>{room.descriptors.one}</p>
                                    </div>
                                    <div className="descriptor">
                                        <i class="fas fa-check"></i>
                                        <p>{room.descriptors.two}</p>
                                    </div>
                                    <div className="descriptor">
                                        <i class="fas fa-check"></i>
                                        <p>{room.descriptors.three}</p>
                                    </div>
                                    <div className="descriptor">
                                        <i class="fas fa-check"></i>
                                        <p>{room.descriptors.four}</p>
                                    </div>
                                    <div className="descriptor">
                                        <i class="fas fa-check"></i>
                                        <p>{room.descriptors.five}</p>
                                    </div>
                                </div>
                            )}
                            <button className="button">Book Now</button>
                        </div>
                    </div>
                ))}
            </section>
        )
    }
}

export default Rooms ;