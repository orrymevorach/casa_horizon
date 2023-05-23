import React, { useEffect, useState } from 'react';
import { awsBucket } from '../../../constants';
import { activities } from 'data';
import classnames from 'classnames';
import { debounce } from 'utils';

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDistance, setSlideDistance] = useState(360);
  const [textContainerLargeWidth, setTextContainerLargeWidth] =
    useState('95px');
  const [textContainerSmallSlide, setTextContainerSmallSlide] = useState('0px');

  useEffect(() => {
    function setSlide() {
      setSlideDistance(window.innerWidth > 600 ? 360 : 320);
    }
    if (typeof window === 'object') {
      setSlide();
      window.addEventListener('resize', debounce(setSlide, 100));
      return () =>
        window.removeEventListener('resize', debounce(setSlide, 100));
    }
  }, []);

  // Initial styling and animation effect for acivity name box: Yoga, Surf, Sunsets, & Turtles
  useEffect(() => {
    const current = Array.from(document.getElementsByClassName('textIndex'));
    const boxWidths = current.map((box) => box.clientWidth);
    let includedWords = boxWidths.slice(0, currentIndex);
    const transform = includedWords.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    setTextContainerLargeWidth(`${boxWidths[currentIndex]}px`);
    setTextContainerSmallSlide(transform);
  }, [currentIndex]);

  const numberOfParagraphs = activities.length;
  function slideRight() {
    setCurrentIndex((currentIndex + 1) % numberOfParagraphs);
  }

  function slideLeft() {
    setCurrentIndex((currentIndex - 1) % numberOfParagraphs);
  }

  return (
    <section className="activities" id="activities">
      <div className="wrapper-small">
        <button className="left-arrow" onClick={slideLeft}>
          <picture>
            <source
              srcSet={`${awsBucket}/icons/left-arrow-white.png`}
              media="(max-width: 360px)"
            />
            <source srcSet={`${awsBucket}/icons/left-arrow.png`} />
            <img src={`${awsBucket}/icons/left-arrow.png`} alt="Left Arrow" />
          </picture>
        </button>
        <button className="right-arrow" onClick={slideRight}>
          <picture>
            <source
              srcSet={`${awsBucket}/icons/right-arrow-white.png`}
              media="(max-width: 360px)"
            />
            <source srcSet={`${awsBucket}/icons/right-arrow.png`} />
            <img src={`${awsBucket}/icons/right-arrow.png`} alt="Right Arrow" />
          </picture>
        </button>
        <div className="left">
          <div className="image-container-large">
            <div
              className="image-container-small"
              style={{
                width: `${slideDistance * numberOfParagraphs}px`,
                transform: `translateX(-${slideDistance * currentIndex}px)`,
              }}
            >
              {activities.map(({ src, alt }) => (
                <img
                  key={src}
                  src={`${awsBucket}/${src}`}
                  alt={alt}
                  className="activities-images"
                />
              ))}
            </div>
          </div>
          <div className="circles-container" id="circles-container">
            {activities.map((activity, index) => (
              <div
                key={activity.alt}
                className={classnames('circle', {
                  selected: index === currentIndex,
                })}
              ></div>
            ))}
          </div>
        </div>

        <div className="right">
          <div className="title-container">
            <h2>Eat. Sleep.</h2>
            <div
              className="text-container-large"
              style={{ width: textContainerLargeWidth }}
            >
              <div
                className="text-container-small"
                style={{
                  transform: `translateX(-${textContainerSmallSlide}px)`,
                }}
              >
                {activities.map(({ heading }) => (
                  <h2 className="textIndex" key={heading}>
                    {heading}
                  </h2>
                ))}
              </div>
            </div>
          </div>

          <div className="paragraph-container-large">
            <div
              className="paragraph-container-small"
              style={{
                width: `${numberOfParagraphs * slideDistance}px`,
                transform: `translateX(-${currentIndex * slideDistance}px)`,
              }}
            >
              {activities.map(({ description }) => (
                <p key={description} className="lh-30 paragraph">
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
