import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const logoNav = document.getElementsByClassName("logo-nav")[0]
        const windowHeight = window.innerHeight

        window.addEventListener('scroll', () => {
            // In desktop only:
            if(window.innerWidth > 570) {
                // When on the header, remove non-header-styling from navigation bar 
                if (window.scrollY < windowHeight) {
                    logoNav.classList.remove("non-header-styling")
                }

                // When scrolling passed the header, Add non-header-styling and animation to nav
                else if (window.scrollY > windowHeight) {
                    logoNav.classList.add("non-header-styling")
                    logoNav.style.animation = 'fadeIn linear 0.2s'
                }

            }

            // In mobile only:
            else if (window.innerWidth < 570) {
                const hamIcon = document.getElementById("ham-icon")
                // Show ham icon at top if scrolled past header
                if (window.scrollY > windowHeight || hamIcon.classList.contains("open")) {
                    hamIcon.classList.add("ham-icon-mobile")
                    hamIcon.style.position = "fixed"
                }
                else if (window.scrollY < windowHeight) {
                    hamIcon.classList.remove("ham-icon-mobile")
                    hamIcon.style.position = "relative"
                }
            }

        })
        
        // Ham Icon working properly for mobile
        if(window.innerWidth < 570) {
            const hamIcon = document.getElementById("ham-icon")
            const hamMenu = document.getElementById("ham-menu")
            
            hamMenu.addEventListener("click", () => {
                if(hamIcon.classList.contains("open") && hamMenu.classList.contains("show")) {
                    hamIcon.classList.remove("open")
                    hamMenu.classList.remove("show")
                }
            })
        }

        window.addEventListener('popstate', () => {
            if(window.location.hash !== "#/") {
                const logoImage = document.getElementsByClassName("logo-nav-top-left")[0].children[0]
                logoImage.style.opacity = "1"
            }
        })
        
    }

    growNav() {

        const windowHeight = window.innerHeight

        // window.addEventListener("scroll", () => {
            if(window.scrollY > windowHeight) {
                const navLinks = document.getElementsByClassName("nav-links")
                const hamIcon = document.getElementById("ham-icon")
                const responsiveNav = document.getElementsByClassName("non-header-styling")[0]
        
                if (hamIcon.classList.contains("open")) {
                    if(navLinks) {
                        for(let key in navLinks) {
                            if(typeof navLinks[key] === "object") {
                                navLinks[key].classList.add("shrink")
                            }
                        }
                    }
                    
                    if(responsiveNav) {
                        responsiveNav.style.padding = "30px 40px 20px 40px"
                    }
                }
            }
        // })
        
    }

    shrinkNav() {
        const navLinks = document.getElementsByClassName("nav-links")
        const hamIcon = document.getElementById("ham-icon")
        const responsiveNav = document.getElementsByClassName("non-header-styling")[0]
        const windowHeight = window.innerHeight
        
        // window.addEventListener("scroll", () => {
        if(window.scrollY > windowHeight) {
            if(!hamIcon.classList.contains("open")) {
                if(navLinks) {
                    for(let key in navLinks) {
                        if(typeof navLinks[key] === "object") {
                            navLinks[key].classList.remove("shrink")
                        }
                    }
                }
        
            }
            if(responsiveNav) {
                responsiveNav.style.padding = "10px 40px 0px 30px"
            }
        }
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
            // <nav className="ham-nav" onMouseOver={this.growNav} onMouseOut={this.shrinkNav}>
            <nav className="ham-nav">
                <ul id="ham-menu">
                    <NavLink to="/"><li className="nav-links">Home</li></NavLink>
                    <NavLink to="/rooms"><li className="nav-links">Our Rooms</li></NavLink>
                    <NavLink to="/book" target="_blank"><li className="nav-links">Book Now</li></NavLink>
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
                    <img src="../img/logo-two.png" alt="Casa Horizon Logo" />
                </div>
                <div className="logo-nav-top-right">
                    <Nav />
                </div>
            </div>
        )
    }
}

export default LogoNav;