import React from 'react';

export default class Ezee extends React.Component {
  componentDidMount() {
    const logoNav = document.getElementsByClassName('logo-nav-top-right')[0];
    const logoImage = document.getElementsByClassName('logo-nav-top-left')[0]
      .children[0];
    if (window.location.hash === '#/book') {
      logoNav.style.display = 'none';
      logoImage.style.opacity = '1';
    }
  }
  render() {
    return (
      <div class='bewarp'>
        <form
          name='_resBBBox'
          action='https://live.ipms247.com/booking/book-rooms-casahorizon'
          target='_blank'
          method='post'
          style={{ margin: '0px' }}>
          <div class='bb_resbox' id='bb_resBookingBox'></div>
        </form>
      </div>
    );
  }
}
