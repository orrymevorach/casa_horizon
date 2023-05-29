import React from 'react';

export default function BeachfrontCottage() {
  return (
    <div>
      <div className="text-container">
        <div className="row">
          <h2>Beachfront Cottage</h2>
          <p className="price">(From $150/night)</p>
        </div>
        <p className="paradise">
          It's hard to describe paradise, but we will try...
        </p>
        <p>
          The private Beachfront Cottage is known for its incredible views out
          over our beautiful Playa Escameca, which is just a 100 steps away.
        </p>
        <p>
          The master king bedroom comes with a walk-through closet, 2
          high-powered fans, an ensuite bathroom with a hot/cold shower, and an
          ocean view.
        </p>
        <p>
          The cabin has an open sitting area, a large kitchen equipped with a
          fridge, freezer and kitchen supplies, and an enormous balcony.
        </p>
      </div>
      <div className="numbers-container-large">
        <div className="number-container">
          <p className="number">5</p>
          <p className="number-text">Guests</p>
        </div>
        <div className="number-container">
          <p className="number">1</p>
          <p className="number-text">Private Bathroom</p>
        </div>
        <div className="number-container">
          <p className="number">1</p>
          <p className="number-text">Private Kitchen</p>
        </div>
        <div className="number-container">
          <p className="number">1</p>
          <p className="number-text">Balcony</p>
        </div>
        <div className="number-container">
          <p className="number">1</p>
          <p className="number-text">Beachview</p>
        </div>
      </div>
    </div>
  );
}
