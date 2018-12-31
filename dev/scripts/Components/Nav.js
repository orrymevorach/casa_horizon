import React from 'react';

const Nav = () => {
    function showNav() {
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

    return (
        <nav className="ham-nav">
            <ul id="ham-menu">
                <li>Our Rooms</li>
                <li>Book Now</li>
            </ul>
            <button id="ham-icon" onClick={showNav}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}

export default Nav;