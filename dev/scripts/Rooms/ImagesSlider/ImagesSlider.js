import React from 'react';
import classNames from 'classnames';

class ImagesSlider extends React.Component {
    render() {

        const titles = {
            beachfront: [
                {
                    "title": "Sunset"
                },
                {
                    "title": "Balcony"
                },
                {
                    "title": "Living Room"
                },
                {
                    "title": "Master Bedroom"
                },
                {
                    "title": "Kitchen"
                }
            ],
            jungle: [
                {
                    "title": "Jungle House"
                },
                {
                    "title": "Living Room"
                },
                {
                    "title": "Bedroom"
                },
                {
                    "title": "Yoga Loft"
                },
                {
                    "title": "Shared Kitchen"
                }
            ]
        }

        const arrayToMap = 
            this.props.section === "beachfront" ? titles.beachfront 
            : this.props.section === "jungle" ? titles.jungle 
            : null

        return (
            
            <div className="images-slider">
                {arrayToMap.map((section, index) => {
                    return (
                        <div className={classNames("image-container", {"beachfront-image": this.props.section === "beachfront", "jungle-image": this.props.section === "jungle"})} key={index}>
                            <div className="overlay">
                                <h4>{section.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ImagesSlider ;