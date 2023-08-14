import React, { useState } from 'react';
import classNames from 'classnames';
import { buildingContainerData } from 'data';
import useWindowSize from '../../../hooks/useWindowSize';
import ImagesSlider, { images } from '../ImagesSlider/ImagesSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
    <>
      <div className="slider-container-large">
        <div className="left-arrow" onClick={slideLeft}>
          <FontAwesomeIcon icon={faChevronLeft} color="white" size="3x" />
        </div>
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
        <div className="right-arrow" onClick={slideRight}>
          <FontAwesomeIcon icon={faChevronRight} color="white" size="3x" />
        </div>
      </div>
    </>
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
