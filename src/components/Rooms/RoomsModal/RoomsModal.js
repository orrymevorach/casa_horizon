import React, { useState, useEffect } from 'react';
import { awsBucket } from 'constants';
import { rooms } from 'data';

export default function RoomsModal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDistance, setSlideDistance] = useState('');
  useEffect(() => {
    if (typeof window === 'object') {
      window.scrollTo(0, 0);
      setSlideDistance(window.innerWidth * currentIndex);
    }
  });

  function closeRoomsModal() {
    window.location.href = '/rooms';
    setTimeout(() => {
      const jungleHouse = document.getElementById('jungle-house');
      jungleHouse.scrollIntoView();
    }, 100);
  }

  function slideRight() {
    setCurrentIndex((currentIndex + 1) % rooms.length);
  }

  function slideLeft() {
    setCurrentIndex((currentIndex - 1) % rooms.length);
  }

  return (
    <div className="rooms-modal">
      <div className="close-button" onClick={closeRoomsModal}>
        <i className="fas fa-times"></i>
      </div>

      <div className="left-arrow left-arrow-desktop" onClick={slideLeft}>
        <img src={`${awsBucket}/icons/left-arrow.png`} alt="Left Arrow" />
      </div>

      <div className="right-arrow right-arrow-desktop" onClick={slideRight}>
        <img src={`${awsBucket}/icons/right-arrow.png`} alt="Right Arrow" />
      </div>

      <div className="room-slider-container clearfix">
        {rooms.map((room, index) => (
          <div
            className="room-container"
            key={index}
            style={{ transform: `translateX(-${slideDistance}px)` }}
          >
            <div className="room-container-left">
              <img src={`${awsBucket}/${room.image}`} alt={room.name} />
            </div>

            <div className="room-container-right">
              {/* arrows only visible in */}
              <div className="left-arrow left-arrow-mobile" onClick={slideLeft}>
                <img
                  src={`${awsBucket}/icons/left-arrow.png`}
                  alt="Left Arrow"
                />
              </div>

              <div
                className="right-arrow right-arrow-mobile"
                onClick={slideRight}
              >
                <img
                  src={`${awsBucket}/icons/right-arrow.png`}
                  alt="Right Arrow"
                />
              </div>
              <div className="top-text">
                <h2>{room.name}</h2>
                {room.subtext && <p className="subtext">{room.subtext}</p>}
              </div>
              <div className="price">
                <p className="from">from</p>
                <h1>{room.price} / night</h1>
              </div>
              {room.descriptors && (
                <div className="descriptors">
                  <div className="descriptor">
                    <i className="fas fa-check"></i>
                    <p>{room.descriptors.one}</p>
                  </div>
                  <div className="descriptor">
                    <i className="fas fa-check"></i>
                    <p>{room.descriptors.two}</p>
                  </div>
                  <div className="descriptor">
                    <i className="fas fa-check"></i>
                    <p>{room.descriptors.three}</p>
                  </div>
                  <div className="descriptor">
                    <i className="fas fa-check"></i>
                    <p>{room.descriptors.four}</p>
                  </div>
                  {room.descriptors.five && (
                    <div className="descriptor">
                      <i className="fas fa-check"></i>
                      <p>{room.descriptors.five}</p>
                    </div>
                  )}
                </div>
              )}
              <a
                href="https://live.ipms247.com/booking/book-rooms-casahorizon"
                target="_blank"
                className="modal-book-button"
              >
                <button className="button">Book Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
