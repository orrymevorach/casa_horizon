import React from 'react';
import RoomsPage from 'components/Rooms/RoomsPage';
import MenuBar from 'components/shared/MenuBar/MenuBar';
import Footer from 'components/shared/Footer/Footer';
import Head from 'components/shared/Head/Head';

export default function Rooms() {
  return (
    <>
      <Head />
      <MenuBar />
      <RoomsPage />
      <Footer />
    </>
  );
}
