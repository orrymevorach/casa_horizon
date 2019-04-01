import React from 'react';
import LogoNav from '../../Components/LogoNav/LogoNav';

class HomeHeader extends React.Component {
    // Fade In Animations
    componentDidMount() {
        
        // Initial Css for Header Background Image
        $('.overflow-container').css({'transform': 'scale(1.2)'})
        // Trigger Animation for Header Background Image
        $('.overflow-container').css({
            'animation': 'shrink linear 3s',
            'transform': 'scale(1)'
        })
        
        // Initial CSS for text-container H1
        $('header .text-container h1').css({ 
            'opacity': ' 0', 
            'transform': 'scale(0.8)' 
        })
        // Trigger Animation for text-container H1
        $('header .text-container h1').css({
            'animation': 'fadeAndGrow linear 3s',
            'opacity': ' 1',
            'transform': 'scale(1)'
        })
        
        // Initial Css for arrow 
        $('header .text-container a').css({ 'opacity': ' 0' })
        // Trigger Animation for Arrow
        $('header .text-container a').css({
            'animation': 'fadeIn linear 3s',
            'opacity': ' 1'
        })

        // Initial Css for Logo and Nav
        $('.logo-nav').css({ 'opacity': ' 0' })
        // Trigger Animation for Logo and Nav
        $('.logo-nav').css({ 
            'animation': ' fadeIn linear 3s',
            'opacity': ' 1' 
        })

        
    }

    render() {
        return (
            <header className="home-header">
                <div className="overflow-container">
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
                </div>
            </header>
        )
    }
    
}

export default HomeHeader;