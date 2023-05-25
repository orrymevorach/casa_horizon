import * as React from 'react';
import icon from '../../../images/sun-icon.png';
import { Helmet } from 'react-helmet';

export default function Head() {
  return (
    <Helmet>
      {/* <!-- Title --> */}
      <title>Casa Horizon</title>

      {/* <!-- Icon --> */}
      <link rel="icon" href={icon} />

      {/* <!-- Google Fonts --> */}
      <link
        href="https://fonts.googleapis.com/css?family=Lora:400i,700i|Muli:400,600,700"
        rel="stylesheet"
      />
    </Helmet>
  );
}
