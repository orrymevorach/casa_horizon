import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="header-top-left">
                    <img src="../img/Logo.png" alt="Casa Horizon Logo"/>
                </div>
            </div>

            <div className="text-container">
                <div className="header-text center">
                    <h1>Experience rustic luxury at
                        <br></br>
                        Casa Horizon Surf & Yoga Luxury Hostel,
                        <br></br>
                        a secluded paradise in the
                        <br></br>
                        deep south of Nicaragua.
                    </h1>
                    <a href="#traveler-info" >
                        <div className="arrow-container" >
                            <img src="../img/header-arrow.png" alt="Click To See More"/>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;