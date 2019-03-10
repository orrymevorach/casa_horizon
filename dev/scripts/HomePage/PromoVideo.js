import React from 'react';

class PromoVideo extends React.Component {
    promoModal() {
        const promoOverlay = document.getElementsByClassName("promo-overlay")[0]
        promoOverlay.style.display = "flex"
        
        const promoVideoSection = document.getElementsByClassName("promo-video")[0]
        promoVideoSection.style.margin = "0"

        const headerHeight = document.getElementsByTagName("header")[0].clientHeight,
        travelerInfoHeight = document.getElementsByClassName('about')[0].clientHeight,
        aboutHeight = document.getElementsByClassName('traveler-info')[0].clientHeight,
        topOfPromoVideoSection =  headerHeight + travelerInfoHeight + aboutHeight
        
        window.scrollTo(0, topOfPromoVideoSection)

        const body = document.getElementsByTagName("body")[0]
        body.classList.add("stop-scroll")

    }

    closePromoModal() {
        const promoOverlay = document.getElementsByClassName("promo-overlay")[0]
        promoOverlay.style.animation = "fadeOut linear 0.3s";
        setTimeout(() => {
            promoOverlay.style.display = "none"
        }, 300)
        
        const body = document.getElementsByTagName("body")[0]
        body.classList.remove("stop-scroll")

        const promoVideoSection = document.getElementsByClassName("promo-video")[0]
        promoVideoSection.style.margin = "100px 0"
    }
    
    render() {
        return (
            <section className="promo-video">
                <div className="promo-overlay">
                    <div className="close-button" onClick={this.closePromoModal}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="video-container">
                        <video autoPlay controls>
                            <source src="../img/rooms/video.MOV"/>
                        </video>
                    </div>
                </div>
                <div className="video-container">
                    <button className="button" onClick={this.promoModal}>Watch Video</button>
                    <video>
                        <source src="../img/rooms/video.MOV"/>
                    </video>
                </div>
            </section>
        )
    }
}

export default PromoVideo ;