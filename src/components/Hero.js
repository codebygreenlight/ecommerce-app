import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  width: '100%',
  height: '500px',      // Fixed height for all images
  objectFit: 'cover',   // This will ensure images cover the area without distortion
};

const Hero = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,  // 3 seconds per slide
    pauseOnHover: false,  // Continue playing on hover
    dots: true,          // Show navigation dots
  };

  return (
    <Carousel {...settings}>
      <div>
        <img src="/banner1.jpg" alt="Hero 1" style={contentStyle} />
      </div>
      <div>
        <img src="/banner2.jpg" alt="Hero 2" style={contentStyle} />
      </div>
      <div>
        <img src="/banner3.jpg" alt="Hero 3" style={contentStyle} />
      </div>
    </Carousel>
  );
};

export default Hero; 