import React, { useState, useEffect } from "react";

const Statistics = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [data, setData] = useState({
    heading: "",
    subtitle: "",
    bgColor: "",
    textColor: "",
    stats: [],
    numbersBgColor: "",
    numbersTextColor: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/statistics`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="relative py-4"
      style={{ backgroundColor: data.bgColor, color: data.textColor }}
    >
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          {/* Heading and Subtitle */}
          <div className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-4xl font-bold" style={{ color: data.textColor }}>
              {data.heading}
            </h2>
            <p className="mx-auto max-w-screen-md text-center md:text-lg" style={{ color: data.textColor }}>
              {data.subtitle}
            </p>
          </div>

          {/* Statistics Grid */}
          <div
            className="grid grid-cols-2 gap-2 rounded-lg p-3 md:grid-cols-5 md:gap-2 md:p-5"
            style={{ backgroundColor: data.numbersBgColor }}
          >
            {data.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <a href={stat.link || "#"} target="_blank" rel="noopener noreferrer">
                  {stat.icon && <img src={stat.icon} alt={stat.label} className="w-10 h-10 mb-2" />}
                </a>
            
                <div className="text-sm sm:text-base" style={{ color: data.numbersTextColor }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
