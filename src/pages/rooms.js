import React from 'react';
import RoomsPage from 'components/Rooms/RoomsPage';
import MenuBar from 'components/shared/MenuBar/MenuBar';
import Footer from 'components/shared/Footer/Footer';

export default function Rooms() {
  return (
    <>
      {' '}
      <MenuBar />
      <RoomsPage />
      <Footer />
    </>
  );
}
