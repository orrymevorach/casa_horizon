import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { awsBucket } from 'constants';
import { buildingContainerData } from 'data';
import { debounce } from 'utils';

export default function BuildingContainer({ section, children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDistance, setSlideDistance] = useState(360);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (typeof window === 'object') {
      const windowWidth = window.innerWidth;
      const getSlideDistance = () => {
        if (windowWidth >= 820) {
          setIsDesktop(true);
          return 400;
        } else if (windowWidth < 820 && windowWidth > 320) {
          setIsDesktop(false);
          return 360;
        } else {
          setIsDesktop(false);
          return 320;
        }
      };

      function setSlide() {
        setSlideDistance(getSlideDistance());
      }
      setSlide();
      window.addEventListener('resize', debounce(setSlide, 100));
      return () =>
        window.removeEventListener('resize', debounce(setSlide, 100));
    }
  }, []);

  function slideRight() {
    setCurrentIndex((currentIndex + 1) % buildingContainerData[section].length);
  }

  function slideLeft() {
    setCurrentIndex((currentIndex - 1) % buildingContainerData[section].length);
  }

  return (
    <div
      className={classNames('building-container', {
        'jungle-container': section === 'jungle',
        'beachfront-container': section === 'beachfront',
      })}
      id={section}
    >
      <div className="left">
        {!isDesktop && (
          <div>
            <div className="left-arrow" onClick={slideLeft}>
              <picture>
                <source
                  srcSet={`${awsBucket}/icons/left-arrow-white.png`}
                  media="(max-width: 360px)"
                />
                <source srcSet={`${awsBucket}/icons/left-arrow.png`} />
                <img
                  src={`${awsBucket}/icons/left-arrow.png`}
                  alt="Left Arrow"
                />
              </picture>
            </div>
            <div className="right-arrow" onClick={slideRight}>
              <picture>
                <source
                  srcSet={`${awsBucket}/icons/right-arrow-white.png`}
                  media="(max-width: 360px)"
                />
                <source srcSet={`${awsBucket}/icons/right-arrow.png`} />
                <img
                  src={`${awsBucket}/icons/right-arrow.png`}
                  alt="Right Arrow"
                />
              </picture>
            </div>

            <div className="slider-container-large">
              <div
                className="slider-container-small"
                style={{
                  transform: `translateX(-${slideDistance * currentIndex}px)`,
                }}
              >
                {buildingContainerData[section].map(({ src, alt }) => (
                  <img src={`${awsBucket}/${src}`} alt={alt} key={src} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="right">{children}</div>
    </div>
  );
}
