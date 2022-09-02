import React from 'react';

class RoomsHeader extends React.Component {
    render() {
        return (
            <header className="rooms-header">
                {/* <video autoPlay loop> */}
                <video autoPlay loop>
                    <source src="../img/video.MOV"/>
                </video>
                <a href="#rooms-about-us">
                    <div className="arrow-container" >
                        <img src="../img/header-arrow.png" alt="Click To See More"/>
                    </div>
                </a>
            </header>
        )
    }
}

export default RoomsHeader ;