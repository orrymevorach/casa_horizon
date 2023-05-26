import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { awsBucket } from '../../../constants';
import Loader from 'components/shared/Loader/Loader';

export default function ContactForm() {
  const [state, handleSubmitFormspree] = useForm('mknaajab');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handleSubmitFormspree(e);
      setIsLoading(false);
    }, 500);
  };

  if (state.succeeded) {
    return (
      <div className="book-now-page success">
        <h2>Thank you!</h2>
        <p>
          We will be in touch soon to complete your booking. Finn can't wait to
          meet you!
        </p>
        <img src={`${awsBucket}/finn.jpeg`} alt="Finn" className="finn" />
      </div>
    );
  }

  if (isLoading || state.submitting) {
    return (
      <div className="book-now-page">
        <Loader />
      </div>
    );
  }

  return (
    <div className="book-now-page">
      <h2>Request A Booking</h2>
      <div className="row">
        <div className="column column1">
          <p className="description">
            Please fill out the form below, and we will be in touch to complete
            your booking. We can't wait to greet you at Casa Horizon!
          </p>
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
              placeholder="Email address"
              id="email"
              name="email"
              required
            />
            <input
              type="text"
              placeholder="Check in date"
              id="check-in"
              name="check-in"
              onFocus={(e) => (e.currentTarget.type = 'date')}
              onBlur={(e) => (e.currentTarget.type = 'text')}
            />
            <input
              type="number"
              placeholder="Number of nights"
              id="number-of-nights"
              name="number-of-nights"
            />
            <input
              type="number"
              placeholder="Number of rooms"
              id="rooms"
              name="rooms"
            />
            <textarea
              placeholder="Message (Room preferences, special requests, etc.)"
              id="message"
              name="message"
              rows={5}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="column">
          <img src={`${awsBucket}/rooms/cottage-sunset.jpg`} alt="" />
        </div>
      </div>
    </div>
  );
}
