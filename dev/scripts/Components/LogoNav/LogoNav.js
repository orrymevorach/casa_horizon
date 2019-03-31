import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const headerHeight = document.getElementsByTagName('header')[0].clientHeight,
                logoNav = document.getElementsByClassName("logo-nav")[0],
                bookButton = document.getElementsByClassName('book-button')[0]

        window.addEventListener('scroll', () => {
            // In desktop only:
            if(window.innerWidth > 570) {
                // When on the header:
                // --> Remove non-header-styling from navigation bar 
                // --> Hide book button
                if (window.scrollY < headerHeight) {
                    logoNav.classList.remove("non-header-styling")
                    bookButton.style.display = "none";
                }

                //When scrolling passed the header:
                    // --> Add non-header-styling and animation to nav
                    // --> Show book button and include animation
                else if (window.scrollY > headerHeight) {
                    logoNav.classList.add("non-header-styling")
                    logoNav.style.animation = 'fadeIn linear 0.2s'
                    bookButton.style.animation = 'fadeIn linear 0.2s'
                    bookButton.style.display = 'block'
                }

            }

            // For mobile, show ham icon at top if scrolled past header
            else if (window.innerWidth < 570) {
                const hamIcon = document.getElementById("ham-icon")
                if (window.scrollY > headerHeight || hamIcon.classList.contains("open")) {
                    hamIcon.classList.add("ham-icon-mobile")
                    hamIcon.style.position = "fixed"
                }
                else if (window.scrollY < headerHeight) {
                    hamIcon.classList.remove("ham-icon-mobile")
                    hamIcon.style.position = "relative"
                }
            }

            // Changing color of book button when its over dark section
            const middleOfWindow = window.scrollY + (window.innerHeight / 2),
                travelerInfoHeight = document.getElementsByClassName('traveler-info')[0].clientHeight,
                aboutHeight = document.getElementsByClassName('about')[0].clientHeight,
                promoHeight = document.getElementsByClassName("promo-video")[0].clientHeight,
                reviewsHeight = document.getElementsByClassName('reviews')[0].clientHeight,
                activitiesHeight = document.getElementsByClassName('activities')[0].clientHeight,
                surfHeight = document.getElementsByClassName('surf')[0].clientHeight,
                totalHeightWithoutFooter = headerHeight + travelerInfoHeight + aboutHeight + promoHeight + reviewsHeight + activitiesHeight + surfHeight
            
            
            if(middleOfWindow > headerHeight + travelerInfoHeight + aboutHeight + promoHeight && middleOfWindow < headerHeight + travelerInfoHeight + aboutHeight + promoHeight + reviewsHeight) {
                bookButton.children[0].style.color = 'white';
                bookButton.style.outline = '2px solid white';
            }
            else {
                bookButton.children[0].style.color = 'black';
                bookButton.style.outline = '2px solid black';
            }

            // Hide button if its over the footer
            if (middleOfWindow > totalHeightWithoutFooter) {
                bookButton.style.visibility = 'hidden'
            }
            else {
                bookButton.style.visibility = 'visible'
            }
        })
        
        // Add hover state to fixed book button (intentionally outside of scroll event listener)
        bookButton.addEventListener("mouseover", function() {
            bookButton.style.outline = 'none';   
            bookButton.children[0].style.color = 'white'; 
        })

        // hide book button if screen is less than 750px
        setTimeout(function() {
            if(window.innerWidth < 950) {
                bookButton.style.display = 'none';
            }
        }, 100)

        window.addEventListener('resize', () => {
            if (window.innerWidth < 950) {
                bookButton.style.display = 'none';
            }
            else {
                bookButton.style.display = "block"
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
    }

    growNav() {

        const headerHeight = document.getElementsByTagName("header")[0].clientHeight

        // window.addEventListener("scroll", () => {
            if(window.scrollY > headerHeight) {
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
        const headerHeight = document.getElementsByTagName("header")[0].clientHeight
        
        // window.addEventListener("scroll", () => {
            if(window.scrollY > headerHeight) {
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
            
        // })
        

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