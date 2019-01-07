import React from 'react';
import LogoNav from './LogoNav';

class Header extends React.Component {
    // Fade In Animations
    componentDidMount() {
        // text-container H1 Text Initial CSS
        $('header .text-container h1').css({ 
                'opacity': ' 0', 
                'transform': 'scale(0.97)' 
            })
        // text-container Arrow Initial Css
        $('header .text-container a').css({ 'opacity': ' 0' })
        // Logo and Nav Initial Css
        $('header .logo-nav').css({ 'opacity': ' 0' })
        
        // Trigger Animation for text-container H1
        $('header .text-container h1').css({ 
            'animation': 'fadeAndGrow linear 3s', 
            'opacity': ' 1', 
            'transform': 'scale(1)'
        })
        
        setTimeout(() => {
            // Trigger Animation for Logo and Nav
            $('header .logo-nav').css({ 
                'animation': ' fadeIn linear 1s',
                'opacity': ' 1' 
            })

            // Trigger Animation for text-container Arrow
            $('header .text-container a').css({ 
                'animation': 'fadeIn linear 3s', 
                'opacity': ' 1' 
            })
        }, 2000);
    }

    render() {
        return (
            <header>
                <LogoNav />
    
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
    
}

export default Header;