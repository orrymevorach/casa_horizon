import React from 'react';

class TravelerInfo extends React.Component {
    componentDidMount() {
        const boxes = document.getElementsByClassName('traveler-info')[0].children[0].children
        for(let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add('hideAndSlideDown')
        }
    
        const headerHeight = document.getElementsByTagName('header')[0].clientHeight,
        boxesHeight = boxes[0].clientHeight,
        revealAt = headerHeight + ((boxesHeight / 3) * 2);
        
        window.addEventListener('scroll', () => {
            const bottomOfWindow = window.scrollY + window.innerHeight
            
            if(bottomOfWindow > revealAt) {
                for(let i = 0; i < boxes.length; i++) {
                    let interval = parseInt(`${i}00`)
                    if (interval !== 0) {
                        interval = interval * 2 - 100
                    }
                    setTimeout(() => {
                        boxes[i].classList.remove('hideAndSlideDown')
                    }, interval)
                }       
            }
            else {
                for(let i = 0; i < boxes.length; i++) {
                    boxes[i].classList.add('hideAndSlideDown')
                }
            }
        });
    }

    render() {
        return (
            <section className="traveler-info" id="traveler-info">
                <div className="boxes-container">
                    <div className="box">
                        <div className="text-container">
                            <h2>Solo Travelers</h2>
                            <p>Come enjoy the magnificence of Casa Horizon as a solo traveler with other travelers in our rustic luxury dorm-style room or private room. Surf, yoga, hammocks, turtles, sunsets and cervazas.</p>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="text-container">
                            <h2>Couples & Families</h2>
                            <p>The perfect getaway to enjoy a peaceful, off the beaten path paradise beach. Private suites with patio and hammocks. Large kitchen, sofas,and common areas to vibe with other travellers.</p>
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
}

export default TravelerInfo;