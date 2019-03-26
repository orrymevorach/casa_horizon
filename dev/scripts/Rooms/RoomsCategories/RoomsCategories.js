import React from 'react';

class RoomsCategories extends React.Component {
    render() {

        const categories = [
            {
                name: "Jungle House",
                price: "$30",
                description: "Couples, Families & Groups",
                capacity: "1 - 5",
                imageUrl: "../img/Rooms/cottage-sunset.jpg",
                anchor: "#jungle"
            },
            {
                name: "Beachfront Cottage",
                price: "$30",
                description: "Couples, Families & Groups",
                capacity: "1 - 4",
                imageUrl: "../img/Rooms/casa-courtyard.jpg",
                anchor: "#beachfront"
            }
        ]

        return (
            <section className="room-categories-container">
                {categories.map((category, index) => (
                    <a href={category.anchor} className="room-category" key={index} id={`room-category-${index}`}>
                        <div className="overlay">
                            <h3>{category.name}</h3>
                        </div>
                    </a>
                ))}
            </section>
        )
    }
}

export default RoomsCategories ;