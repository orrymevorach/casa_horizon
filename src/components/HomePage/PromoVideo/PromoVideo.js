import React from 'react';

class PromoVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='promo-video'>
        <h2>
          ‘Stunning video filmed at Casa Horizon and Playa Escameca, early
          2019.'
        </h2>
        <iframe
          src='https://player.vimeo.com/video/327204487?title=0&byline=0&portrait=0'
          frameBorder='0'
          webkitallowfullscreen='true'
          mozallowfullscreen='true'
          allowFullScreen={true}></iframe>
      </section>
    );
  }
}

export default PromoVideo;
