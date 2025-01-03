import React, { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const Contact2 = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [contactData, setContactData] = useState({
    "title": "", 
    "subtitle": "", 
    "bgColor": "", 
    "textColor": "", 
   
  });

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Fetch data from the API
  useEffect(() => {
    fetch(`${apiUrl}/contact/contact2`)
      .then((res) => res.json())
      .then((data) => setContactData(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const subject = "New Contact Form Submission";
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    const mailtoLink = `mailto:${contactData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  if (!contactData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section
        className="py-24"
        style={{ backgroundColor: contactData.bgColor, color: contactData.textColor }}
      >
       
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
            <div
              className="flex items-center lg:mb-0 mb-10"
              style={{ color: contactData.textColor }}
            >
              <div>
                <h4 className="text-base font-medium leading-6 mb-4 lg:text-left text-center">
                  {contactData.title}
                </h4>
                <h2 className="font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                  {contactData.subtitle}
                </h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-14 shadow-sm placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-14 shadow-sm placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                    placeholder="Email"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-48 shadow-sm resize-none placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                    placeholder="Message"
                  />
                  <button
                    className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full shadow transition-all duration-700"
                    style={{
                      backgroundColor: contactData.textColor,
                      color: contactData.bgColor
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div
              className="lg:max-w-xl w-full h-[600px] flex items-center justify-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${contactData.imageUrl})` }}
            >
              <div className="lg:w-96 w-auto h-auto bg-white text-black shadow-xl lg:p-6 p-4">
             
                <div className=' border-b border-gray-300 pb-2 mb-2'>
               <span className='font-bold'>  Phone: </span> 
                {content.locations.map((location, index) =>
                <div className='flex flex-col'>
                  <h5 className="text-base font-normal  flex">
                  {location.phone} ( {location.country})
                  </h5>
                  </div>
                      )}
      
      </div>
                <a className="flex items-center pb-4 mb-4 border-b border-gray-300">
                  
                  <h5 className="text-base font-normal leading-6 py-2">
                    <span className='font-bold'>Email: </span> {contactData.email}
                  </h5>
                </a>
          
                {content.locations.map((location, index) => (
                  <a key={index} className="flex flex-col items-start pb-4 mb-4 border-b border-gray-300">
                    <h2 className='font-bold'>{location.country} : </h2>
                    <h5 className="text-base font-normal leading-6 ">
                      {location.address}
                    </h5>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact2;
