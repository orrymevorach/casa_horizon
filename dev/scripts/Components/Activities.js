import React from 'react';

const Activities = ({ index }) => {
    
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
        let posX = 360 * index
        $('.image-container-small').css({ 'transform': `translateX(-${posX}px)` })
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


    // Add effect that when the words swipe in (yoga, surf, nothing, etc.), they grow and turn green for a second, then shrink and change back to black


    return (
        <section className="activities" id="activities">
            <div className="wrapper-small">
                <div className="left">
                    <div className="left-arrow" onClick={slideLeft}>
                        <img src="../img/left-arrow.png" alt="Left Arrow" />
                    </div>
                    <div className="image-container-large">
                        <div className="image-container-small">
                            <img src="../img/yoga.png" alt="Yoga"  className="activities-images"/>    
                            <img src="../img/surf.png" alt="Surf" className="activities-images"/>
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
                            </div>
                        </div>
                    </div>
                    
                    <p className="lh-30">The regular breeze in Nicaragua is also what makes this area more well known for surfing, beause it creates the ideal 'offshore' winds that give the wave good shape. We're blssed with consistent surf, and you can catch good waves any month.</p>
                    <div className="right-arrow" onClick={slideRight}>
                        <img src="../img/right-arrow.png" alt="Right Arrow"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities;