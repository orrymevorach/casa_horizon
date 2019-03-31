import React from 'react';

class Reviews extends React.Component {
    componentDidMount() {
        // set number of circles
        const circlesContainer = document.getElementById('circles-container-reviews')
        const reviews = document.getElementsByClassName('reviews-user-review')
        for (let i = 0; i < reviews.length; i++) {
            const circle = document.createElement('div')
            circle.setAttribute("class", `review-circle review-circle-${i}`)
            circle.style.height = "10px"
            circle.style.width = "10px"
            circle.style["background-color"] = "black"
            circle.style.border = "1px solid black"
            circle.style["border-radius"] = "50%"
            circle.style.margin = "20px 15px 0 0"
            circlesContainer.appendChild(circle)
        }

        $('.review-circle-0').css({ 'background-color': 'white' })
        
    }
    render() {
        const reviews = [
            {
                name: "Jon Gauthier",
                text: "Unbelievable place. The staff, both local and tourist were nothing short of amazing.",
            },
            {
                name: "Melanie Joy",
                text: "It is one of the most amazing place I have ever been to. When I first got there I thought it was a private island...",
            },
            {
                name: "Matt Donlevy",
                text: "Always has and always will be my favourite stop in Nicaragua. Great views, great vibes, great people."
            }
        ]

        let index = 0;
        
        setInterval(() => {
            index++;
            
            if (index > reviews.length - 1) {
                index = 0;
            }

            const translate = index * (100 / 3)
            $('.review-container-small').css({"transform": `translateX(-${translate}%)`})
            
            fillCircleWhite(index)

        }, 5000)

        function fillCircleWhite(index) {
            const circles = document.getElementsByClassName('review-circle')
            for(let i = 0; i < circles.length; i++) {
                const circleIndex = parseInt(circles[i].classList[1].split("-")[2])
                if(circleIndex === index) {
                    $(`.review-circle-${circleIndex}`).css({ 'background-color': 'white' })
                }
                else {
                    $(`.review-circle-${circleIndex}`).css({ 'background-color': 'black' })
                }
            }
        }

        return (
            <section className="reviews" id="reviews">
                <div className="timer"></div>
                <div className="overlay">
                    <div className="text-container">
                        <div className="header-text-container">
                            <h3>What Our Visitors Say:</h3>
                            
                        </div>
                        
                        <div className="review-container-large">
                            <div className="review-container-small">
                                {reviews.map((review, index) => {
                                    return (
                                        <a className="reviews-user-review" key={index} href="https://www.facebook.com/pg/casahorizon/reviews/" target="_blank">
                                            <h1>"{review.text}"</h1>
                                            <h1 className="reviewer">- {review.name}</h1>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="circles-container-reviews" id="circles-container-reviews"></div>
                    {/* <a className="read-more-container button" href="https://www.facebook.com/pg/casahorizon/reviews/" target="_blank">
                        <p className="link-to-reviews"><span className="underline">Read more</span> reviews</p>
                    </a> */}
                    
                </div>
            </section>
        )
    }
}

export default Reviews;