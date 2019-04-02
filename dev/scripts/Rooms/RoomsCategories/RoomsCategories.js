import React from 'react';

class RoomsCategories extends React.Component {
    constructor(props) {
        super(props)

        this.scroll = this.scroll.bind(this)
    }

    scroll(e) {
        const jungle = document.getElementById("jungle")
        const beachfront = document.getElementById("beachfront")
        
        if(e.target.className === "overlay") {
            const roomCategoryId = e.target.parentElement.id
            if(roomCategoryId === "room-category-0") {
                jungle.scrollIntoView()
            }
            else if (roomCategoryId === "room-category-1") {
                beachfront.scrollIntoView()
            }
        }
        else if(e.target.tagName === "H3") {
            const roomCategoryId = e.target.parentElement.parentElement.id
            if(roomCategoryId === "room-category-0") {
                jungle.scrollIntoView()
            }
            else if (roomCategoryId === "room-category-1") {
                beachfront.scrollIntoView()
            }
        }
    }
    
    render() {


        const categories = [
            {
                name: "Jungle House",
                price: "$30",
                description: "Couples, Families & Groups",
                capacity: "1 - 5",
                imageUrl: "../img/rooms/cottage-sunset.jpg",
                anchor: "#jungle",
            },
            {
                name: "Beachfront Cottage",
                price: "$30",
                description: "Couples, Families & Groups",
                capacity: "1 - 4",
                imageUrl: "../img/rooms/casa-courtyard.jpg",
                anchor: "#beachfront"
            }
        ]

        return (
            <section className="room-categories-container">
                {categories.map((category, index) => (
                    <a className="room-category" key={index} id={`room-category-${index}`} onClick={this.scroll}>
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