import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const images = {
  beachfront: [
    {
      title: 'Sunset',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="https://casa-horizon.s3.ca-central-1.amazonaws.com/rooms/cottage-sunset.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
    {
      title: 'Balcony',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="../../../images/Homepage/cottage-balcony-new.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
    {
      title: 'Living Room',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="https://casa-horizon.s3.ca-central-1.amazonaws.com/rooms/cottage-inside.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
    {
      title: 'Master Bedroom',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="../../../images/Homepage/cottage-bedroom-new.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
    {
      title: 'Kitchen',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="../../../images/Homepage/cottage-kitchen-new.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
  ],
  jungle: [
    {
      title: 'Jungle House',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="../../../images/Homepage/pool-close-new.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
    {
      title: 'Living Room',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="https://casa-horizon.s3.ca-central-1.amazonaws.com/rooms/casa-living-room.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
    {
      title: 'Bedroom',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="../../../images/rooms/room-3-new.jpeg"
          className={classNames}
          alt=""
        />
      ),
    },
    {
      title: 'Yoga Loft',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="https://casa-horizon.s3.ca-central-1.amazonaws.com/rooms/yoga-loft.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
    {
      title: 'Shared Kitchen',
      Image: ({ classNames = '' }) => (
        <StaticImage
          src="https://casa-horizon.s3.ca-central-1.amazonaws.com/rooms/casa-kitchen.jpg"
          className={classNames}
          alt=""
        />
      ),
    },
  ],
};
export default function ImagesSlider({ section, setSelectedImage }) {
  const imageData = images[section];
  return (
    <div className="images-slider">
      {imageData.map((section, index) => {
        const Image = section.Image;
        return (
          <div
            className="image-container"
            key={index}
            data-imageurl={section.imageUrl}
            onClick={() => setSelectedImage(section)}
          >
            <div className="overlay"></div>
            <h4>{section.title}</h4>
            {Image && <Image classNames="background-image" />}
          </div>
        );
      })}
    </div>
  );
}
