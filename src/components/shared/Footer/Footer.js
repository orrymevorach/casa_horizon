import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="column column1">
        <h2>Follow us on Instagram</h2>
        {/* <!-- SnapWidget --> */}
        <iframe
          src="https://snapwidget.com/embed/645913"
          className="snapwidget-widget"
          allowtransparency="true"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div className="column column2">
        <h2>Stay Informed</h2>
        <p>Get the latest updates on Casa Horizon</p>
        <p className="margin-top">Sign up for our newsletter here</p>
        <form action="https://formspree.io/info@casahorizon.com" method="POST">
          <input
            type="email"
            className="margin-top"
            placeholder="Email Address"
            required
          />
          <input type="submit" value="Sign Up" />
        </form>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/casahorizon/" target="blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/casahorizon/" target="blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="column column3">
        <h2>Contact</h2>
        <form action="https://formspree.io/mnqdloag" method="POST">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" required />
          <input type="textarea" placeholder="Message" required />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="column column4">
        <h2>Get In Touch</h2>
        <div className="email">
          <p className="bold">Email us</p>
          <p>info@casahorizon.com</p>
        </div>
        <div className="call">
          <p className="bold">Call us toll free</p>
          <p>(800) 403 - 5208</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
