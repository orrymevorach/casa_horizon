import React from 'react';
import classNames from 'classnames';
import { awsBucket } from 'constants';

class ImagesSlider extends React.Component {
  render() {
    const titles = {
      beachfront: [
        {
          title: 'Sunset',
          imageUrl: `${awsBucket}/rooms/cottage-sunset.jpg`,
        },
        {
          title: 'Balcony',
          imageUrl: `${awsBucket}/rooms/cottage-balcony.jpg`,
        },
        {
          title: 'Living Room',
          imageUrl: `${awsBucket}/rooms/cottage-inside.jpg`,
        },
        {
          title: 'Master Bedroom',
          imageUrl: `${awsBucket}/rooms/master.jpg`,
        },
        {
          title: 'Kitchen',
          imageUrl: `${awsBucket}/rooms/cottage-kitchen.jpg`,
        },
      ],
      jungle: [
        {
          title: 'Jungle House',
          imageUrl: `${awsBucket}/rooms/casa-courtyard.jpg`,
        },
        {
          title: 'Living Room',
          imageUrl: `${awsBucket}/rooms/casa-living-room.jpg`,
        },
        {
          title: 'Bedroom',
          imageUrl: `${awsBucket}/rooms/Room1.jpg`,
        },
        {
          title: 'Yoga Loft',
          imageUrl: `${awsBucket}/rooms/yoga-loft.jpg`,
        },
        {
          title: 'Shared Kitchen',
          imageUrl: `${awsBucket}/rooms/casa-kitchen.jpg`,
        },
      ],
    };

    const { section } = this.props;

    function selectImage(e) {
      let imageUrl;

      if (e.target.parentElement.className === 'overlay') {
        imageUrl = e.target.parentElement.parentElement.dataset.imageurl;
      } else if (e.target.parentElement.classList.contains('image-container')) {
        imageUrl = e.target.parentElement.dataset.imageurl;
      }
      if (section === 'beachfront') {
        const left = document.getElementsByClassName('beachfront-container')[0]
          .children[0];
        left.style['background-image'] = `url(${imageUrl})`;
      } else if (section === 'jungle') {
        const left = document.getElementsByClassName('jungle-container')[0]
          .children[0];
        left.style['background-image'] = `url(${imageUrl})`;
      }
    }

    const arrayToMap =
      this.props.section === 'beachfront'
        ? titles.beachfront
        : this.props.section === 'jungle'
        ? titles.jungle
        : null;

    return (
      <div className="images-slider">
        {arrayToMap.map((section, index) => {
          return (
            <div
              className={classNames('image-container', {
                'beachfront-image': this.props.section === 'beachfront',
                'jungle-image': this.props.section === 'jungle',
              })}
              key={index}
              data-imageurl={section.imageUrl}
              onClick={(e) => selectImage(e)}
            >
              <div className="overlay">
                <h4>{section.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImagesSlider;
