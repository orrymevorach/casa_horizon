import React from 'react';
import Header from './Header/Header';
import TravelerInfo from './TravelerInfo/TravelerInfo';
import About from './About/About';
import Reviews from './Reviews/Reviews';
import Activities from './Activities/Activities';
import Surf from './Surf/Surf';
import LogoNav from '../Components/LogoNav/LogoNav';
import PromoVideo from './PromoVideo/PromoVideo';

class HomePage extends React.Component {
    componentDidMount() {
        if(this.props.version === "one") {
            console.log(true)
        }
        else if(this.props.version === "two") {
            const navTwo = document.getElementsByClassName("logo-nav")[0]
            navTwo.classList.add("nav-two")

            const hamMenu = document.getElementById("ham-menu")
            // hamMenu.classList.add("show")

            const hamIcon = document.getElementById("ham-icon")
            // hamIcon.style.display = "none"

            const topLeft = document.getElementsByClassName("logo-nav-top-left")[0]
            topLeft.style.display = "none"
        }
    }
    render() {
        return (
            <div>
                <LogoNav />

                <div className="home">
                    {/* Book Button */}
                    <a href="/book" target="_blank" className="book-button">
                      <button className="button">Book Now</button>
                    </a>

                    {this.props.version === "two" ?
                        <div className="header-2">
                            <Header  
                                version={this.props.version}
                            />    
                        </div>
                        : <Header 
                        version={this.props.version}
                        />
                    }
                    
                    <TravelerInfo />
                    <About />
                    <PromoVideo />
                    <Reviews />
                    <Activities />
                    <Surf />
                </div>
            </div>
        )
    }
}

export default HomePage ;