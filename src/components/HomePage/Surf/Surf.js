import React from 'react';
import { Link } from 'gatsby';

const Surf = () => {
  return (
    <section className="surf" id="surf">
      <div className="vertical-line"></div>
      <div className="text-container">
        <h2>Ready to book your next adventure?</h2>
        <Link to="/book-now" className="button">
          Hell Yeah
        </Link>
      </div>
      <div className="background"></div>
    </section>
  );
};

export default Surf;
