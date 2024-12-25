import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WhyUs = () => {
  const [whyUsData, setWhyUsData] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch data from the API
    axios.get(`${apiUrl}/home/why-us`)
      .then(response => {
        setWhyUsData(response.data); // Assume response.data has the necessary structure
      })
      .catch(error => {
        console.error("Error fetching Why Us data:", error);
      });
  }, []);

  // Early return if data hasn't loaded yet
  if (!whyUsData) {
    return <p>Loading...</p>;
  }

  const { title, subtitle, bgColor, textColor, divider, features } = whyUsData;

  return (
    <div className="relative"    style={{ backgroundColor: bgColor ,textColor:textColor }}>
      {divider && <img src={divider} className="absolute top-0 w-full" alt="" />}

      {/* Half circle section */}
      <div
        className="w-full py-20 bg-gradient-to-r  relative rounded-b-[70%] overflow-hidden"
        style={{ backgroundColor: textColor,color:bgColor }}
      >
        <div className="text-center px-4 md:px-8">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl md:text-2xl">{subtitle}</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center border border-gray-200 rounded-lg p-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: textColor,color:bgColor }}
              >
                <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full"  style={{ backgroundColor: bgColor }}>
                  <img
                    src={feature.iconUrl}
                    alt={`${feature.title} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-center">{feature.description}</p>

                {/* Hover reveal section */}
                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
