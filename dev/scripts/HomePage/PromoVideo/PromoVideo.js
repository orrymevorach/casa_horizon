import React from 'react';

class PromoVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playVideo: false
        }
        
        this.promoModal = this.promoModal.bind(this)
    }

    promoModal() {
        const promoOverlayContainer = document.getElementsByClassName("promo-overlay-container")[0]
        const videoContainer = document.getElementsByClassName("video-container")[0]
        const sectionPromoVideo = document.getElementsByClassName("promo-video")[0]
        const promoVideoPlayButton = document.getElementsByClassName("promo-video-play-button")[0]
        const promoVideo = document.getElementsByClassName("promo-video-video")[0]
        const headerHeight = document.getElementsByTagName("header")[0].clientHeight
        const travelerInfoHeight = document.getElementsByClassName('about')[0].clientHeight
        const aboutHeight = document.getElementsByClassName('traveler-info')[0].clientHeight
        
        promoVideoPlayButton.style.display = "none"
        
        const topOfPromoVideoSection =  headerHeight + travelerInfoHeight + aboutHeight
        window.scrollTo(0, topOfPromoVideoSection)
        
        const body = document.getElementsByTagName("body")[0]
        body.classList.add("stop-scroll")
        sectionPromoVideo.style.margin = "0"

        promoOverlayContainer.style.animation = "fadeIn linear 0.3s";
        videoContainer.style.animation = "fadeIn linear 0.3s";
        promoOverlayContainer.classList.add("promo-overlay")
        videoContainer.classList.add("video-container-large")

        promoVideo.play()

        this.setState({
            playVideo: true
        })

    }

    closePromoModal() {
        const promoOverlayContainer = document.getElementsByClassName("promo-overlay-container")[0]
        const videoContainer = document.getElementsByClassName("video-container")[0]
        const sectionPromoVideo = document.getElementsByClassName("promo-video")[0]
        const promoVideoPlayButton = document.getElementsByClassName("promo-video-play-button")[0]
        
        promoOverlayContainer.style.animation = "fadeOut linear 0.3s";
        promoVideoPlayButton.style.animation = "fadeOut linear 0.3s";

        setTimeout(() => {
            promoOverlayContainer.classList.remove("promo-overlay")
            videoContainer.classList.remove("video-container-large")
            sectionPromoVideo.style.margin = "100px 0"
        }, 400)
        
        const body = document.getElementsByTagName("body")[0]
        body.classList.remove("stop-scroll")

    }
    
    render() {
        return (
            <section className="promo-video">
                <div className="promo-overlay-container">
                    <div className="close-button promo-video-close-button" onClick={this.closePromoModal}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="video-container">
                        <button className="button promo-video-play-button" onClick={this.promoModal}>Watch Video</button>
                        <video className="promo-video-video" controls={this.state.playVideo}>
                            <source src="../img/video.MOV"/>
                        </video>
                    </div>
                </div>
            </section>
        )
    }
}

export default PromoVideo ;