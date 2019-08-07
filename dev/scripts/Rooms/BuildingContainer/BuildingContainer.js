import React from 'react';
import classNames from 'classnames';
import { awsBucket } from '../../app';

class BuildingContainer extends React.Component {
    render() {

        const { section } = this.props

        let index = 0;

        function slideRight() {
            index++;

            // Dont let slider exceed number of circles
            const imagesLength = 
                section === "jungle" ? document.getElementsByClassName('jungle-slider-images').length - 1 
                : section === "beachfront" ? document.getElementsByClassName('beachfront-slider-images').length - 1 
                : null;
            if (index > imagesLength) {
                index = 0
            }
            slideImage(index)
        }

        function slideLeft() {
            index--;

            // Dont let slider go below 0
            const imagesLength = 
                section === "jungle" ? document.getElementsByClassName('jungle-slider-images').length - 1 
                : section === "beachfront" ? document.getElementsByClassName('beachfront-slider-images').length - 1 
                : null;
            if (index < 0) {
                index = imagesLength
            }
            slideImage(index)
        }

        function slideImage(index) {
            let posX = 
                window.innerWidth >= 820 ? 400 * index 
                : window.innerWidth < 820 && window.innerWidth > 320 ? 360 * index 
                : window.innerWidth <= 320 ? 320 * index
                : null
            
            if(section === "jungle") {
                $(".jungle-container .slider-container-small").css({"transform": `translateX(-${posX}px)`})
            }
            else if (section === "beachfront") {
                $(".beachfront-container .slider-container-small").css({"transform": `translateX(-${posX}px)`})
            }
        }



        return (
            <div className={classNames("building-container", {"jungle-container": section === "jungle", "beachfront-container": section === "beachfront"})} id={section}>
                <div className="left">
                    <div className="left-arrow" onClick={slideLeft}>
                        <img src={`${awsBucket}/icons/left-arrow.png`} alt="Left Arrow" />
                    </div>
                    <div className="right-arrow" onClick={slideRight}>
                        <img src={`${awsBucket}/icons/right-arrow.png`} alt="Right Arrow"/>
                    </div>
                    <div className="left-arrow left-arrow-mobile" onClick={slideLeft}>
                        <img src={`${awsBucket}/icons/left-arrow-white.png`} alt="Left Arrow" /> 
                    </div>
                    <div className="right-arrow right-arrow-mobile" onClick={slideRight}>
                        <img src={`${awsBucket}/icons/right-arrow-white.png`} alt="Right Arrow"/> 
                    </div>
                    <div className="slider-container-large">
                        {section === "jungle" ?
                        <div className="slider-container-small">
                            <img src={`${awsBucket}/rooms/casa-courtyard.jpg`} className="jungle-slider-images" alt="Jungle House"/>
                            <img src={`${awsBucket}/rooms/casa-living-room.jpg`} className="jungle-slider-images" alt="Living Room"/>
                            <img src={`${awsBucket}/rooms/Room1.jpg`} className="jungle-slider-images" alt="Bedroom"/>
                            <img src={`${awsBucket}/rooms/yoga-loft.jpg`} className="jungle-slider-images" alt="Yoga Loft"/>
                            <img src={`${awsBucket}/rooms/casa-kitchen.jpg`} className="jungle-slider-images" alt="Kitchen"/>
                        </div>
                        : section === "beachfront" ?
                        <div className="slider-container-small">
                            <img src={`${awsBucket}/rooms/cottage-sunset.jpg`} className="beachfront-slider-images" alt="Sunset"/>
                            <img src={`${awsBucket}/rooms/cottage-balcony.jpg`} className="beachfront-slider-images" alt="Balcony"/>
                            <img src={`${awsBucket}/rooms/cottage-inside.jpg`} className="beachfront-slider-images" alt="Living Room"/>
                            <img src={`${awsBucket}/rooms/master.jpg`} className="beachfront-slider-images" alt="Master Bedroom"/>
                            <img src={`${awsBucket}/rooms/cottage-kitchen.jpg`} className="beachfront-slider-images" alt="Kitchen"/>
                        </div>
                        : null }
                    </div>
                </div>
                
                <div className="right">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default BuildingContainer ;