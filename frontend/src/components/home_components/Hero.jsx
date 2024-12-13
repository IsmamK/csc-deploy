import React, { useEffect, useState } from 'react';

const Hero = () => {
  // State to hold the hero data
  const [heroData, setHeroData] = useState({
    "title": "",
    "bgColor":"",
    "textColor":"",
    "description": "",
    "divider": "",
    "image1": "",
    "image2": "",
    "altText1": "",
    "altText2": "",
    "contactLink": "",
    "contactText": "",
    "ctaLink": "",
    "ctaText": "",

  }
  );
  const apiUrl = import.meta.env.VITE_API_URL;


  // Fetch data from the API
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/hero`); // Replace with your API endpoint
        const data = await response.json();
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  // Return a loading indicator if data is not yet fetched
  if (!heroData) {
    return <div>Loading...</div>;
  }
  

  return (

    <div className="relative p-0 pb-20" style={{backgroundColor:heroData.bgColor,color:heroData.textColor}}>
      <img src={heroData.divider || ""} className='absolute top-0 z-100' alt="" />

      <div className="pb-6 sm:pb-8 lg:pb-12 " >
        <section className="w-3/4 mx-auto px-4 md:px-8">
          <div className="mb-8 flex flex-col lg:flex-row justify-between md:mb-16 items-center lg:gap-40  p-0">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 py-10 lg:py-24">
              <h1 className="mb-4 text-5xl font-bold  sm:text-5xl md:mb-8 md:text-7xl">
                {heroData.title}
              </h1>

              <p className="max-w-md leading-relaxed  xl:text-lg">
                {heroData.description}
              </p>
            </div>

            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 ">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img
                  src={heroData.image1 || ""}
                  loading="lazy"
                  alt={heroData.altText1 || "Hero Image 1"}
                  className="w-80 h-48 md:h-96 md:w-96 object-cover object-center"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src={heroData.image2 || ""}
                  loading="lazy"
                  alt={heroData.altText2 || "Hero Image 2"}
                  className="w-80 h-48 md:h-96 md:w-96 object-cover object-center "
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className='flex gap-4'>
              <a href={heroData.contactLink} className="btn " style={{backgroundColor:heroData.textColor,color:heroData.bgColor}}> 
                {heroData.contactText}
              </a>

              <a href={heroData.ctaLink} className={`btn `} style={{backgroundColor:heroData.bgColor,color:heroData.textColor}}>  
                            {heroData.ctaText}
              </a>
            </div>
            {/* Social media section */}
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
