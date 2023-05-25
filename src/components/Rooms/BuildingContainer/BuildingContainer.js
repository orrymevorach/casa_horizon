import React, { useState } from 'react';
import classNames from 'classnames';
import { awsBucket } from 'constants';
import { buildingContainerData } from 'data';
import useWindowSize from '../../../hooks/useWindowSize';
import ImagesSlider, { images } from '../ImagesSlider/ImagesSlider';

const MobileSlider = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideDistance = 360;

  function slideRight() {
    setCurrentIndex((currentIndex + 1) % buildingContainerData[section].length);
  }

  function slideLeft() {
    setCurrentIndex((currentIndex - 1) % buildingContainerData[section].length);
  }
  return (
    <div>
      <div className="left-arrow" onClick={slideLeft}>
        <picture>
          <source
            srcSet={`${awsBucket}/icons/left-arrow-white.png`}
            media="(max-width: 360px)"
          />
          <source srcSet={`${awsBucket}/icons/left-arrow.png`} />
          <img src={`${awsBucket}/icons/left-arrow.png`} alt="Left Arrow" />
        </picture>
      </div>
      <div className="right-arrow" onClick={slideRight}>
        <picture>
          <source
            srcSet={`${awsBucket}/icons/right-arrow-white.png`}
            media="(max-width: 360px)"
          />
          <source srcSet={`${awsBucket}/icons/right-arrow.png`} />
          <img src={`${awsBucket}/icons/right-arrow.png`} alt="Right Arrow" />
        </picture>
      </div>

      <div className="slider-container-large">
        <div
          className="slider-container-small"
          style={{
            transform: `translateX(-${slideDistance * currentIndex}px)`,
          }}
        >
          {images[section].map(({ Image }, index) => (
            <Image classNames="mobile-image" key={`mobile-image-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function BuildingContainer({ section, children }) {
  const imageData = images[section];
  const [selectedImage, setSelectedImage] = useState(imageData[0]);

  const { isDesktop, device, isMobile } = useWindowSize({});
  const Image = selectedImage.Image;

  return (
    <>
      <div
        className={classNames('building-container', {
          'jungle-container': section === 'jungle',
          'beachfront-container': section === 'beachfront',
        })}
        id={section}
      >
        <div className="left">
          {isMobile ? (
            <MobileSlider section={section} device={device} />
          ) : (
            <Image classNames="selected-image" />
          )}
        </div>

        <div className="right">{children}</div>
      </div>
      {!isMobile && (
        <ImagesSlider section={section} setSelectedImage={setSelectedImage} />
      )}
    </>
  );
}
