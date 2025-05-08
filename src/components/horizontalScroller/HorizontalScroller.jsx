import React from 'react';
import Slider from 'react-slick';


const importAll = (r) => r.keys().map(r);
const newspapers = importAll(require.context("./newspaperImages", false, /\.(png|jpe?g|svg|webp)$/));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 3 slides at a time
  slidesToScroll: 1,
  autoplay: true, // Enable auto scroll
  autoplaySpeed: 2000, // Delay in ms between slides
  centerMode: false, // Center mode off
  centerPadding: '0', // No padding
};

const imgStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '150px',
  objectFit: 'cover',
  padding: '0 15px', // Add horizontal padding to create gaps
};

const HorizontalScroller = () => {
  return (
    <div className="container">
      <div className="w-75 mx-auto">
        <h1 className="text-center">Featured By</h1>
        <div style={{ width: '100%', padding: '0px' }}>
          <Slider {...settings}>
            {newspapers.map((newspaper,index) => (
              <div key={index}>
                <img src={newspaper} alt={`Newspaper ${newspaper.id}`} style={imgStyle} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroller;
