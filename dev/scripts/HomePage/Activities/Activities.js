import React from 'react';
import { awsBucket } from '../../app';

class Activities extends React.Component {
    componentDidMount() {
        
        // Initial width of text container in activities to fit the first word
        const width = document.getElementsByClassName('textIndex-0')[0].clientWidth
        document.getElementsByClassName('text-container-large')[0].style.width = `${width}px`

        // Initial width of paragraph container
        // const width = document.getElementsByClassName('textIndex-0')[0].clientWidth
        const numberOfParagraphs = document.getElementsByClassName("paragraph").length
        const paragraphWidth = window.innerWidth > 600 ? numberOfParagraphs * 360 : numberOfParagraphs * 320
        document.getElementsByClassName('paragraph-container-small')[0].style.width = `${paragraphWidth}px`

        // Initial width of image container small, which holds all the images and needs to be as long as all of them combined
        const numberOfImages = document.getElementsByClassName('activities-images').length
        const containerWidth = window.innerWidth > 600 ? 360 * numberOfImages : 320 * numberOfImages
        $('.image-container-small').css({ 'width': `${containerWidth}px` })


        const circlesContainer = document.getElementById('circles-container')
        const images = document.getElementsByClassName('activities-images')
        for (let i = 0; i < images.length; i++) {
            const circle = document.createElement('div')
            circle.setAttribute("class", `circle circle-${i}`)
            circle.style.height = "10px"
            circle.style.width = "10px"
            circle.style["background-color"] = "black"
            circle.style.border = "1px solid black"
            circle.style["border-radius"] = "50%"
            circle.style.margin = "20px 15px 0 0"
            circlesContainer.appendChild(circle)
        }

        $('.circle-0').css({ 'background-color': 'white' })

        // Add effect that when the words swipe in (yoga, surf, nothing, etc.), they grow and turn green for a second, then shrink and change back to black
    }
    render() {
        let index = 0

        function slideRight() {
            index++;

            // Dont let slider exceed number of circles
            const imagesLength = document.getElementsByClassName('activities-images').length - 1
            if (index >= imagesLength) {
                index = imagesLength
            }
            slideImage(index)
            fillCircleWhite(index)
            slideText(index)
            slideParagraph(index)
        }

        function slideLeft() {
            index--;
            // Dont let slider go below 0
            if (index <= 0) {
                index = 0
            }
            slideImage(index)
            fillCircleWhite(index)
            slideText(index)
            slideParagraph(index)
        }

        function fillCircleWhite(index) {
            const circles = document.getElementsByClassName('circle')
            for(let i = 0; i < circles.length; i++) {
                const circleIndex = parseInt(circles[i].classList[1].split("-")[1])
                if(circleIndex === index) {
                    $(`.circle-${circleIndex}`).css({ 'background-color': 'white' })
                }
                else {
                    $(`.circle-${circleIndex}`).css({ 'background-color': 'black' })
                }
            }
        }

        function slideImage(index) {
            let posX = window.innerWidth > 600 ? 360 * index : 320 * index
            $('.image-container-small').css({ 'transform': `translateX(-${posX}px)` })
        }

        function slideParagraph(index) {
            
            let posX = window.innerWidth > 600 ? 360 * index : 320 * index
            $('.paragraph-container-small').css({ 'transform': `translateX(-${posX}px)` })
        }

        function slideText(index) {
            const words = document.getElementsByClassName('textIndex')
            let wordsArray = []
            
            for(let i = 0; i < words.length; i++) {
                const wordWidth = words[i].clientWidth
                wordsArray.push(wordWidth)
            }
            let wordsArrayUpdated = wordsArray.slice(0, index)

            const length = wordsArrayUpdated.reduce((acc, cv) => {
                return acc + cv
            }, 0)
            
            for(let i = 0; i < words.length; i++) {
                const wordWidth = words[i].clientWidth
                const wordIndex = parseInt(words[i].classList[1].split("-")[1])
                if(wordIndex === index) {
                    $('.text-container-large').css({'width': `${wordWidth}`})
                    $('.text-container-small').css({'transform': `translateX(-${length}px)`})
                }
            }
        }
        return (
            <section className="activities" id="activities">
                <div className="wrapper-small">
                    <div className="left-arrow" onClick={slideLeft}>
                        <img src={`${awsBucket}/icons/left-arrow.png`} alt="Left Arrow" />
                    </div>
                    <div className="right-arrow" onClick={slideRight}>
                        <img src={`${awsBucket}/icons/right-arrow.png`} alt="Right Arrow"/>
                    </div>
                    <div className="left">
                        <div className="image-container-large">
                            <div className="image-container-small">
                                <img src={`${awsBucket}/homepage/sunsets.jpg`} alt="Sunsets" className="activities-images"/>
                                <img src={`${awsBucket}/homepage/yoga.png`} alt="Yoga"  className="activities-images"/>    
                                <img src={`${awsBucket}/homepage/rory.jpg`} alt="Surf" className="activities-images"/>
                                <img src={`${awsBucket}/homepage/turtles.jpg`} alt="Turtles" className="activities-images"/>
                            </div>
                        </div>
                        {/* Circles get added in Component Did Mount of app.js */}
                        <div className="circles-container" id="circles-container"></div>
                    </div>
    
                    <div className="right">
                        <div className="title-container">
                            <h2>Eat. Sleep.</h2>
                            <div className="text-container-large">
                                <div className="text-container-small">
                                    <h2 className="textIndex textIndex-0">Yoga.</h2>
                                    <h2 className="textIndex textIndex-1">Surf.</h2>
                                    <h2 className="textIndex textIndex-2">Sunsets.</h2>
                                    <h2 className="textIndex textIndex-3">Turtles.</h2>
                                </div>
                            </div>
                        </div>
                        
                        <div className="paragraph-container-large">
                            <div className="left-arrow left-arrow-mobile" onClick={slideLeft}>
                                <img src={`${awsBucket}/icons/left-arrow-white.png`} alt="Left Arrow" />
                            </div>
                            <div className="right-arrow right-arrow-mobile" onClick={slideRight}>
                                <img src={`${awsBucket}/icons/right-arrow-white.png`} alt="Right Arrow"/>
                            </div>
                            <div className="paragraph-container-small">
                                <p className="lh-30 paragraph">We have an outstanding yoga studio that overlooks the ocean. Our yoga instructors are certified to instruct those who are brand new to yoga, all the way to the most experienced of yogis.</p>
                                <p className="lh-30 paragraph">The regular breeze in Nicaragua is also what makes this area more well known for surfing, beause it creates the ideal 'offshore' winds that give the wave good shape. We're blssed with consistent surf, and you can catch good waves any month.</p>
                                <p className="lh-30 paragraph">The sunsets in Nicaragua are jaw droppingly beautiful. Feel the golden sun warm your body with your toes sunken into the sand and not a worry in sight.</p>
                                <p className="lh-30 paragraph">We are lucky to have a turtle sanctuary right on our very own beach. Every few weeks we release a batch of sea turtles into the ocean for the very first time. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Activities;