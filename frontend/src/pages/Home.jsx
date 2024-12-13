import React, { useState } from 'react';
import CarouselComponent from '../components/home_components/CarouselComponent';
import Cards from '../components/home_components/Cards';
import Services from '../components/home_components/Services';
import GridCards from '../components/home_components/GridCards';
import WhyUs from '../components/home_components/WhyUs';
import OurClients from '../components/home_components/OurClients';
import News from '../components/home_components/News';
import Contact from '../components/home_components/Contact';
import Statistics from '../components/home_components/Statistics';
import Location from '../components/home_components/Location';
import Hero from '../components/home_components/Hero';
import FeaturedVideo from '../components/home_components/FeaturedVideo';
import { useOutletContext } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import StechBanner from '../components/home_components/StechBanner';

const Home = () => {
  // const { getDivider, availableShapes } = useOutletContext(); // Fetch shapes dynamically
  // const [currentShape, setCurrentShape] = useState('None'); // Default shape

  // const handleShapeChange = (event) => {
  //   setCurrentShape(event.target.value); // Update shape based on selection
  // };

  
  return (
    <>

    
      <CarouselComponent />
      {/* <StechBanner /> */}
      <Hero />
   
      <Services />
      <Cards />
      <Statistics />
      <GridCards  />
      <WhyUs />
      <OurClients />
      <News/>
      <Contact/>
      {/* <Location /> */}
      <FeaturedVideo  />


    </>
  );
};

export default Home;
