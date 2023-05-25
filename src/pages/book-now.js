import React from 'react';
import MenuBar from 'components/shared/MenuBar/MenuBar';
import Footer from 'components/shared/Footer/Footer';
import ContactForm from '../components/BookNow/ContactForm/ContactForm';
import Head from 'components/shared/Head/Head';

export default function Rooms() {
  return (
    <>
      <Head />
      <MenuBar />
      <ContactForm />
      <Footer />
    </>
  );
}
