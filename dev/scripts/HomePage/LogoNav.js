import React from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/rooms"><li>Our Rooms</li></NavLink>
                    <NavLink to="/roomTwo"><li>Rooms 2</li></NavLink>
                    <NavLink to="/sirvoy"><li>Sirvoy</li></NavLink>
                    <NavLink to="/ezee"><li>Ezee</li></NavLink>
                    {/* <li>Book Now</li> */}
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