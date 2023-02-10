import React, { useEffect, useState } from 'react';

export default function Carousel({ images }) {
  const [curImage, setCurImage] = useState(0);
  const length = images.length;

  function nextSlide() {
    setCurImage(curImage === length - 1 ? 0 : curImage + 1);
  }

  function prevSlide() {
    setCurImage(curImage === 0 ? length - 1 : curImage - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurImage(curImage === length - 1 ? 0 : curImage + 1);
    }, 3000);
    return () => clearInterval(interval);
  });

  const imgHolder = {
    transform: 'translateX(' + (-curImage * 100) + '%)',
    display: 'flex'
  };

  return (
    <div className='row'>
      <div className='col-half'>
        <div className='container'>
          <i className='fa-solid fa-chevron-left' id='left-arrow' onClick={prevSlide}></i>
          <i className='fa-solid fa-chevron-right' id='right-arrow' onClick={nextSlide}></i>
          <div className='img-holder' style={imgHolder}>
            {
              images.map((image) => <CarouselImage key={image.id} image={image} />)
            }
          </div>
        </div>
        <div className='button-wrapper'>
          {
            images.map((image) => <CarouselButtons key={image.id} image={image} />)
          }
        </div>
      </div>
    </div>
  );
}

function CarouselImage({ image }) {
  const alt = image.src.split('/')[2].split('.')[0];
  return (
    <img src={image.src} alt={alt} />
  );
}

function CarouselButtons({ image }) {
  return (
    <button id={image.id}></button>
  );
}
