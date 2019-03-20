import React from 'react';

class RoomsCategories extends React.Component {
    render() {

        const categories = [
            {
                name: "Jungle House",
                price: "$30",
                description: "Couples, Families & Groups",
                capacity: "1 - 5",
                imageUrl: "../img/house/balcony-sunset.jpg"
            },
            {
                name: "Beachfront Cottage",
                price: "$30",
                description: "Couples, Families & Groups",
                capacity: "1 - 4",
                imageUrl: "../img/house/casa-courtyard.jpg"
            }
        ]

        return (
            <div className="room-categories-container">
                {categories.map((category, index) => (
                    <div className="room-category" key={index} id={`room-category-${index}`}>
                        <div className="overlay">
                            <h3>{category.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default RoomsCategories ;