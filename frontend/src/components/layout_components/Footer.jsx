import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import social icons

const Footer = () => {

  const apiUrl = import.meta.env.VITE_API_URL; // Adjust as needed
  const [data, setData] = useState({"socials":[]});
  const [servicesData,setServicesData] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const res = await fetch(`${apiUrl}/get-service-slugs/`);
            const data = await res.json();
            setServicesData(data);  // Update state with fetched data
        } catch (error) {
            console.error("Error fetching services:", error);
        } finally {
            setLoading(false);  // Set loading to false once data is fetched
        }
    };

    fetchServices();
}, []);

  useEffect(() => {
    fetch(`${apiUrl}/layout/footer/`) // Replace with actual path or API endpoint
      .then((res) => res.json())
      .then((data) => {setData(data)})
      .catch((error) => console.error("Error loading navbar configuration:", error));
  }, []);



  

  return (
    
    <footer className=" font-bold px-20 py-0  m-0" style={{ backgroundColor: data.bgColor, color: data.textColor }}>
      
      <div className='footer flex flex-col lg:flex-row   lg:items-center '>
          <img src ={data.logo} className='w-60 m-0 p-0'></img>
        
        
       



      <nav className='lg:mx-auto text-xs flex flex-col mx-0'>
        <div>
        <h6 className="font-extrabold text-xl">Company</h6>
        </div>
        <div className='flex lg:flex-col gap-4'>
        <a href="/" className="link link-hover" style={{ color: data.textColor }}>Home</a>
        <a href="/about" className="link link-hover" style={{ color: data.textColor }}> About Us</a>
        <a href="/gallery/photos" className="link link-hover" style={{ color: data.textColor }}>Gallery of Stunning Images</a>
        <a href="/gallery/videos" className="link link-hover" style={{ color: data.textColor }}>Videos </a>
        
        </div>
      </nav>

   
      <nav className='lg:mx-auto text-xs flex flex-col'>
        <div>
        <h6 className="font-extrabold text-xl">Services</h6>
        </div>
        <div className='flex lg:flex-col gap-4'>
        {servicesData.map((service, index) => (
          <a
            key={index}
            href={`/services/${service.slug}`}
            className="link link-hover"
            style={{ color: data.textColor }}
          >
            {service.title}
          </a>
          
        ))}
        </div>
      </nav>
      
      <nav className='lg:mx-auto text-xs flex flex-col'> 
      <div>
        <h6 className="font-extrabold text-xl">
          Partners & Connections
          </h6>
        </div>
        <div className='flex lg:flex-col gap-4'>
        <a href="/affiliations"  className="link link-hover" style={{ color: data.textColor }}>Affiliations</a>
        <a href="/b2b" className="link link-hover" style={{ color: data.textColor }}>Business-to-Business</a>
        <a href="/contact" className="link link-hover" style={{ color: data.textColor }}>Contact</a>
        {/* <p    className="link link-hover" style={{ color: data.textColor }}></p> */}
        </div>
      </nav>

      </div>

      
   
      
      
    </footer>
    
   

 
  );
};

export default Footer;
