import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GridCards = ({ divider }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [cardData, setCardData] = useState({
    title: "",
    subtitle: "",
    bgColor: "",
    textColor: "",
    gridCards: [],
  });
  const [activeCard, setActiveCard] = useState(null);

  const sliderRef = useRef(null); // Reference to the Slider component

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/grid-cards`); // Replace with your API endpoint
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Display arrows on both sides
    prevArrow: (
      <button className="slick-prev text-3xl absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white">
        {"<"}
      </button>
    ),
    nextArrow: (
      <button className="slick-next text-3xl absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white">
        {">"}
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setActiveCard(next),
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
    sliderRef.current.slickGoTo(index); // Change slide to the clicked card
  };

  return (
    <div
      className="relative w-full"
      style={{ backgroundColor: cardData.bgColor, color: cardData.textColor }}
    >
      {divider && <img src={divider} className="absolute top-0 z-10 w-full" alt="Divider" />}

      <div className="p-10 md:p-20 lg:p-20 mx-auto max-w-96 md:max-w-[1000px] lg:max-w-[1500px]">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold my-5">
          {cardData.title}
        </h1>
        <p className="text-center text-lg md:text-2xl lg:text-3xl mb-10">{cardData.subtitle}</p>

        <div className="relative ">
          <Slider ref={sliderRef} {...settings}>
            {cardData.gridCards.map((card, index) => (
              <div
                key={index}
                className={`card-item border rounded-lg shadow-lg overflow-hidden mx-2 transition-all duration-300 transform mx-10 ${
                  activeCard === index
                    ? "ring-4 ring-blue-500 z-10" // Add a border when active, but no scaling
                    : "h-[250px]" // Keep all cards at the same height
                }`}
                style={{
                  backgroundColor: card.flipBgColor,
                  color: card.flipTextColor,
                  transition: "transform 0.3s ease", // Removed scaling transition
                  height: "auto", // Ensures the card maintains its height
                }}
                onClick={() => handleCardClick(index)} // Click card to center it
              >
                <div className="card-content p-5">
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p>{card.description}</p>
                </div>
                <div className="card-image">
                  <img
                    className="w-full h-48 object-cover"
                    src={card.image}
                    alt={card.title}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
