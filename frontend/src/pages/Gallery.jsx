import React, { useEffect, useState } from 'react';

// Array of gallery data including images, subtitles, titles, and descriptions


const API_URL = import.meta.env.VITE_API_URL; // Get API URL from environment variables
const Gallery = () => {
  const [gallery, setGallery] = useState({
    title: "Our Gallery", // Main gallery title
    subtitle: "Stunning collection of images",
    items: [
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
      {
        image: "",
        subtitle: "",
        title: "",
        description: ""
      },
    ]
  });
  
  useEffect(()=>{
    fetch(`${API_URL}/gallery`)
    .then(res=>res.json())
    .then(data=>{
      console.log(`YOLOO: ${data}`)
      setGallery(data)
    })
    
  },[])
  return (
    <section className=" body-font" style={{ backgroundColor: gallery.bgColor, color: gallery.textColor }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">{gallery.title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{gallery.subtitle}</p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center" >
          {gallery.items.map((item, index) => (
            <div key={index} className="lg:w-1/3 l sm:w-1/2 p-4" >
              <div className="flex relative h-72 w-80 lg:h-80 lg:w-96 rounded-lg" style = {{ backgroundColor: gallery.imageBgColor, color: gallery.imageTextColor }}> 
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.image} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100" style = {{ backgroundColor: gallery.imageBgColor}}>
                  <h2 className="tracking-widest text-sm title-font font-semibold  mb-1">{item.subtitle}</h2>
                  <h1 className="title-font text-lg font-extrabold  mb-3">{item.title}</h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Gallery;
