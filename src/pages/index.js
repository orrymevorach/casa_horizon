import * as React from 'react';
import 'styles/styles.scss';
import HomePage from 'components/HomePage/HomePage';
import MenuBar from 'components/shared/MenuBar/MenuBar';
import Footer from 'components/shared/Footer/Footer';
import Head from 'components/shared/Head/Head';

const IndexPage = () => {
  return (
    <>
      <Head />
      <MenuBar />
      <HomePage />
      <Footer />
    </>
  );
};

export default IndexPage;
