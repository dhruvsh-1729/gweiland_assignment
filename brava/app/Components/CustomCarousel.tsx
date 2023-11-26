'use client';
import React, { useState, useEffect } from 'react';

const CustomCarousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handlePrev = () => {
    setAnimate(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setAnimate(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500); // Set the timeout to match the animation duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const style = {
    zIndex: 1,
  };

  return (
    <div className="custom-carousel" style={{ display: 'flex', width: '100%', height: '65vh', position: 'relative' }}>
      <div className="slides" style={{ overflow: 'hidden' }}>
        <div className="slide" style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden', }}>
          <img
            src={images[currentIndex].url}
            alt={`slide ${currentIndex + 1}`}
            style={{
              objectFit: 'cover',
              objectPosition: '50% 0%', // Center horizontally, crop from the top
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          />
          {images[currentIndex].caption && (
            <div
              className={`caption ${animate ? 'animated' : ''}`}
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%',
                textAlign: images[currentIndex].captionPosition === 'left' ? 'left' : 'right',
                color: '#fff',
                padding: '30px',
                marginLeft: images[currentIndex].captionPosition === 'left' ? '40px' : '-40px',
                // margin: '0px 0px 0px 40px',
                zIndex: 1,
              }}
            >
              <h3>{images[currentIndex].caption}</h3>
            </div>
          )}
          <div className="overlay"></div>
        </div>
      </div>

      <button className="prev" onClick={handlePrev} style={style}>
        &lt;
      </button>
      <button className="next" onClick={handleNext} style={style}>
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
