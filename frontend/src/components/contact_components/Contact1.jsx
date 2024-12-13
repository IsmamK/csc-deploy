import React, { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const Contact1 = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [content, setContent] = useState({
    header: ' ',
    subHeader: '',
    buttonText: '',
    buttonLink: '',
    email: '',
    phone: '',
    bgColor: '',
    textColor: '',
    locations: [],
  });

  useEffect(() => {
    // Fetch data from API
    fetch(`${apiUrl}/contact/contact1`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
      });
  }, [apiUrl]);

  if (!content) {
    return <div style={{ textAlign: 'center', padding: '6rem 0' }}>Loading...</div>;
  }

  return (
    <div>
      <section className={`py-24 bg-${content.bgColor} text-${content.textColor}`}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-24 mb-16 text-center justify-center ">
            <div>
              <h2 className="text-4xl font-semibold mb-5">{content.header}</h2>
              <p className="text-lg mb-7">{content.subHeader}</p>
              <hr className='text-gray-300'></hr>
              <p className="text-lg mb-7 my-5"><span className='font-bold'>Email: </span> <i>{content.email}</i></p>
              <hr className='text-gray-300 mb-5'></hr>


              <div className="flex justify-center">
                <a
                  className="btn rounded-full border-none py-3 px-8 bg-${content.textColor} text-${content.bgColor}"
                  href={content.buttonLink}
                >
                  {content.buttonText}
                </a>
              </div>
            </div>
            
          </div>

          {content.locations && content.locations.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {content.locations.map((location, index) => (
      <div key={index} className="group relative h-96 flex justify-center rounded-lg overflow-hidden">
        {/* Background overlay */}
        <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
        
        {/* Location image */}
        <img
          src={`data:image/jpeg;base64,${location.imgSrc}`}
          alt={`${location.country} image`}
          className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
        />
        
        {/* Location details */}
        <div className="absolute bottom-6 w-full text-center px-6 text-white">
          <h5 className="text-xl font-semibold mb-2">{location.country}</h5>
          <p className="text-base font-medium mb-2">{location.address}</p>
          {location.phone && (
            <p className="text-sm font-medium flex justify-center gap-2 items-center bg-white rounded-lg text-black">
               <FaPhone />
              <span className="font-semibold">
               
                Phone:</span>  {location.phone}
            </p>
          )}
        </div>

        {/* Google Maps iframe */}
        <div className="absolute top-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <iframe
            src={location.maplink}
            width="100%"
            height="200"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    ))}
  </div>
) : (
  <div className="text-center">No locations available.</div>
)}

        </div>
      </section>
    </div>
  );
};

export default Contact1;
