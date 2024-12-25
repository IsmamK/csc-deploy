import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Optional, if you want icons for the buttons

const CarouselComponent = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null); // Create a reference to the slider

  useEffect(() => {
    // Fetch the data from the API
    const fetchImages = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/carousel`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data.images); // Update the images state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [apiUrl]);

  // Settings for React Slick
  const settings = {
    dots: true, // Show dots below the carousel
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true, // Loop the carousel
    speed: 100, // Transition speed
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Interval between auto-slides (in ms)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    pauseOnHover: true,
  };

  return (
    <div className="slider-container h-48 lg:h-[600px] items-center overflow-hidden relative">
      {/* Custom Previous Button */}
      <button 
        className="absolute left-[30%] bottom-4 z-10 transform -translate-x-1/2 bg-white p-2 rounded-full"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft color="#333" className='text-xl lg:text-3xl' />
      </button>

      {/* Custom Next Button */}
      <button 
        className="absolute right-[30%] bottom-4 z-10 transform -translate-x-1/2 bg-white p-2 rounded-full"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight className='text-xl lg:text-3xl' color="#333" />
      </button>

      {/* Carousel Slider */}
      <Slider ref={sliderRef} {...settings}>
        {images.length > 0 ? (
          images.map((base64Image, index) => (
            <div key={index}>
              <img 
                src={`data:image/jpeg;base64,${base64Image}`} // Add base64 encoding type
                alt={`Carousel image ${index + 1}`} 
                className="object-cover h-48 lg:h-[600px] w-full" 
                loading="lazy" 
              />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center text-gray-500">
            <p>No images available</p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
