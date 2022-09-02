import React from 'react';

class BookButton extends React.Component {
  componentDidMount() {
    const bookButton = document.getElementsByClassName('book-button')[0];
    const headerHeight = document.getElementsByClassName('home-header')[0]
      .clientHeight;
    const travelerInfoHeight = document.getElementsByClassName(
      'traveler-info',
    )[0].clientHeight;
    const aboutHeight = document.getElementsByClassName('about')[0]
      .clientHeight;
    const promoHeight = document.getElementsByClassName('promo-video')[0]
      .clientHeight;
    const reviewsHeight = document.getElementsByClassName('reviews')[0]
      .clientHeight;
    const activitiesHeight = document.getElementsByClassName('activities')[0]
      .clientHeight;
    const surfHeight = document.getElementsByClassName('surf')[0].clientHeight;
    const totalHeightWithoutFooter =
      headerHeight +
      travelerInfoHeight +
      aboutHeight +
      promoHeight +
      reviewsHeight +
      activitiesHeight +
      surfHeight;

    // Book button gets hidden when screen is less than 950
    if (window.innerWidth > 950) {
      window.addEventListener('scroll', () => {
        const middleOfWindow = window.scrollY + window.innerHeight / 2;

        // Hide book button if its over the header
        if (window.scrollY < headerHeight) {
          bookButton.style.display = 'none';
        } else if (window.scrollY > headerHeight) {
          bookButton.style.animation = 'fadeIn linear 0.2s';
          bookButton.style.display = 'block';
        }

        // Changing color of book button when its over dark section
        if (
          middleOfWindow >
            headerHeight + travelerInfoHeight + aboutHeight + promoHeight &&
          middleOfWindow <
            headerHeight +
              travelerInfoHeight +
              aboutHeight +
              promoHeight +
              reviewsHeight
        ) {
          bookButton.children[0].style.color = 'white';
          bookButton.style.outline = '2px solid white';
        } else {
          bookButton.children[0].style.color = 'black';
          bookButton.style.outline = '2px solid black';
        }

        // Hide button if its over the footer
        if (middleOfWindow > totalHeightWithoutFooter) {
          bookButton.style.visibility = 'hidden';
        } else {
          bookButton.style.visibility = 'visible';
        }
      });

      // Add hover state to fixed book button (intentionally outside of scroll event listener)
      bookButton.addEventListener('mouseover', function () {
        bookButton.style.outline = 'none';
        bookButton.children[0].style.color = 'white';
      });
    }
    // hide book button if screen is less than 950px
    else if (window.innerWidth < 950) {
      setTimeout(function () {
        if (window.innerWidth < 950) {
          bookButton.style.display = 'none';
        }
      }, 100);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 950) {
        bookButton.style.display = 'none';
      } else {
        bookButton.style.display = 'block';
      }
    });
  }

  render() {
    return (
      //   <a href='/#/book' target='_blank' className='book-button'>
      <a
        href='https://live.ipms247.com/booking/book-rooms-casahorizon'
        target='_blank'
        className='book-button'>
        <button className='button'>Book Now</button>
      </a>
    );
  }
}

export default BookButton;
