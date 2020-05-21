import React from 'react';

export default class Ezee extends React.Component {
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
