import React from 'react';

const TravelerInfo = () => {
    return (
        <section className="traveler-info" id="traveler-info">
            <div className="boxes-container">
                <div className="box">
                    <div className="text-container">
                        <h2>Solo Travelers</h2>
                        <p>Come enjoy the luxuries of Casa Horizon as a solo traveler with other solo travelers in our rustic luxury dorm-style room or private room.</p>
                    </div>
                </div>
                <div className="box box2">
                    <div className="text-container">
                        <h2>Couples & Families</h2>
                        <p>Come enjoy the luxuries of Casa Horizon as a group in our dorm-style or private rooms. We can sleep up to 8 people per room with common areas to vibe with other travelers.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="text-container">
                        <h2>Retreats & Events</h2>
                        <p>Our beautiful property is available to be rented out with full use of the kitchen and other amenities. Book Casa Horizon for your next yoga retreat, family reunion, or bachelor/bachelorette party.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TravelerInfo;