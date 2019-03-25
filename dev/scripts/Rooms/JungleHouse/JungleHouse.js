import React from 'react';

class JungleHouse extends React.Component {
    displayRoomsModal() {
        const roomsHeaderHeight = document.getElementsByClassName("rooms-header")[0].clientHeight
        const roomsAboutUsHeight = document.getElementById("rooms-about-us").clientHeight
        const roomsCategoriesHeight = document.getElementsByClassName("room-categories-container")[0].clientHeight
        const roomsModal = document.getElementsByClassName("rooms-modal")[0]
        const roomsModalTopPosition = roomsHeaderHeight + roomsAboutUsHeight + roomsCategoriesHeight
        
        console.log(roomsModal)
        
        roomsModal.style.top = `${roomsModalTopPosition}px`;
        
        const modal = document.getElementsByClassName("rooms-modal")[0]
        modal.style.display = "block"

        window.scrollTo(0, roomsModalTopPosition)

        document.getElementsByTagName("body")[0].classList.add("stop-scroll")
        
    }

    render() {
        return (
            <div className="building-container jungle-container" id="jungle-house">
                <div className="left"></div>
                
                <div className="right">
                    <div className="text-container">
                        <h2>Jungle House</h2>
                        <p>With a large and shared open concept kitchen, it creates a budget friendly experience so you can make your own meals how and when you would like. There are no grocery stores or ATMs in the area, please plan ahead accordingly. We do however have some local restaurants nearby, please find more descriptions and prices in our neighborhood section found below.</p>
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
                    <button className="button" onClick={this.displayRoomsModal}>View All Rooms</button>
                </div>
            </div>
        )
    }
}

export default JungleHouse ;