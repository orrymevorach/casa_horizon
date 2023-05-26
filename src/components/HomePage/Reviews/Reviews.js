import React, { useState, useEffect } from 'react';
import { reviews } from 'data';
import classnames from 'classnames';

export default function Reviews() {
  const [currentIndex, setCurretIndex] = useState(0);

  useEffect(() => {
    const next = (currentIndex + 1) % reviews.length;
    const id = setTimeout(() => setCurretIndex(next), 5000);
    return () => clearTimeout(id);
  }, [currentIndex]);

  return (
    <section className="reviews" id="reviews">
      <div className="timer"></div>
      <div className="overlay">
        <div className="text-container">
          <div className="header-text-container">
            <h3>What Our Visitors Say:</h3>
          </div>

          <div className="review-container-large">
            <div
              className="review-container-small"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {reviews.map((review) => {
                return (
                  <a
                    className="reviews-user-review"
                    key={review.name}
                    href="https://www.facebook.com/pg/casahorizon/reviews/"
                    target="_blank"
                  >
                    <p className="text">"{review.text}"</p>
                    <p className="reviewer text">- {review.name}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="circles-container-reviews"
          id="circles-container-reviews"
        >
          {reviews.map((_, index) => {
            return (
              <div
                key={`circle-${index}`}
                className={classnames(`review-circle review-circle-${index}`, {
                  selected: index === currentIndex,
                })}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
