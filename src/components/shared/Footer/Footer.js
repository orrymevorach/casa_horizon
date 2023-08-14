import React from 'react';
import { useForm } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [state, handleSubmit] = useForm('myyaaebz');

  return (
    <footer>
      <div className="column column1">
        <h2>Follow us on Instagram</h2>
        {/* <!-- SnapWidget --> */}
        <iframe
          src="https://snapwidget.com/embed/645913"
          className="snapwidget-widget"
          allowtransparency="true"
          style={{ border: 'none', overflow: 'hidden' }}
        ></iframe>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/casahorizon/" target="blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/casahorizon/" target="blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      {/* <div className="column column2"> */}
      {/* <h2>Stay Informed</h2>
        <p>Get the latest updates on Casa Horizon</p>
        <p className="margin-top">Sign up for our newsletter here</p>
        <form action="#">
          <input
            type="email"
            className="margin-top"
            placeholder="Email Address"
            required
          />
          <input type="submit" value="Sign Up" />
        </form> */}
      {/* </div> */}
      <div className="column column3">
        {state.succeeded ? (
          <h2>Thank you! We will be in touch!</h2>
        ) : (
          <>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                id="email"
                name="email"
              />
              <input
                type="textarea"
                placeholder="Message"
                required
                id="message"
                name="message"
              />
              <input type="submit" value="Submit" />
            </form>
          </>
        )}
      </div>
      <div className="column column4">
        <h2>Get In Touch</h2>
        <div className="email">
          <p className="bold">Email us</p>
          <p>horizonsanctuary@gmail.com</p>
        </div>
        <div className="call">
          <p className="bold">Whatsapp</p>
          <a href="tel:+1-403-714-3279">+1(403)714-3279</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
