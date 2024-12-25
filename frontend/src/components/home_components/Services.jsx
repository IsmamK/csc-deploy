import React, { useState, useEffect } from 'react';

const Services = () => {
  const [data, setData] = useState({
    bgColor: '',
    textColor: '',
    cardBgColor: '',
    cardTextColor: '',
    title: '',
    description: '',
    services: []
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/services`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="relative">
      <img src={data.divider || ''} className="absolute top-0 z-100" />

      <div className={`py-6 sm:py-8 lg:py-12`} style={{ backgroundColor: data.bgColor, color: data.textColor }}>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col lg:flex-row gap-8">
          {/* Text Section on the Left */}
          <div className="lg:w-1/2 my-auto">
            <h2 className={`mb-4 text-4xl font-bold lg:text-7xl`}>{data.title}</h2>
            <p className={`mb-6 text-lg`}>{data.description}</p>
          </div>

          {/* Services Section on the Right */}
          <div className="lg:w-1/2 ">
            <ul className="space-y-4">
              {data.services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 rounded-lg border p-4 shadow-md h-32"
                  style={{ backgroundColor: data.cardBgColor, color: data.cardTextColor }}
                >
                  <div className="w-16 h-16 flex-shrink-0 border-[#cd993f] border rounded-full flex items-center justify-center">
                    <img src={service.icon}  className="w-12 h-12 object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

