import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(window.innerWidth < 570) {
            const hamIcon = document.getElementById("ham-icon")
            const hamMenu = document.getElementById("ham-menu")
            
            hamMenu.addEventListener("click", () => {
                console.log("clicked!")
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
                    {/* <NavLink to="/home-2"><li className="nav-links">Home-V2</li></NavLink> */}
                    <NavLink to="/rooms"><li className="nav-links">Our Rooms</li></NavLink>
                    {/* <NavLink to="/roomTwo"><li className="nav-links">Rooms 2</li></NavLink> */}
                    <NavLink to="/sirvoy"><li className="nav-links">Sirvoy</li></NavLink>
                    <NavLink to="/ezee"><li className="nav-links">Ezee</li></NavLink>

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