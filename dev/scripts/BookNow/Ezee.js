import React from 'react';
import classnames from 'classnames';

export default function Ezee({ isBelowHeader, isNavShowing }) {
  const showEzee = isBelowHeader && !isNavShowing;
  return (
    <div
      className={classnames('bewarp', {
        'fadeIn show': showEzee,
      })}
      style={{ display: showEzee ? 'block' : 'none' }}>
      <form
        name='_resBBBox'
        action='https://live.ipms247.com/booking/book-rooms-casahorizon'
        target='_blank'
        method='post'
        style={{ margin: '0px' }}>
        <div className='bb_resbox' id='bb_resBookingBox'></div>
      </form>
    </div>
  );
}
