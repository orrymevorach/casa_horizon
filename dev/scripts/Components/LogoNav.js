import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }
    showNav() {
        $('#ham-icon').toggleClass('open');
        
        if($('#ham-menu').hasClass('show')) {
            $('#ham-menu').addClass('fadeOut')
            setTimeout(function () {
                $('#ham-menu').removeClass('show')
                $('#ham-menu').removeClass('fadeOut')
            }, 300)
        }
        else {
            $('#ham-menu').addClass('show')
        }
    }

    
    render() {
        return (
            <nav className="ham-nav">
                <ul id="ham-menu">
                    <li>Our Rooms</li>
                    <li>Book Now</li>
                </ul>
                <button id="ham-icon" onClick={this.showNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        )
    }
}

class LogoNav extends React.Component {
    render() {
        return (
            <div className="logo-nav clearfix">
                <div className="logo-nav-top-left">
                    <img src="../img/Logo.png" alt="Casa Horizon Logo" />
                </div>
                <div className="logo-nav-top-right">
                    <Nav />
                </div>
            </div>
        )
    }
}

export default LogoNav;