import React from 'react';
import Testimonial from '../../Components/Testimonial';
import PricingSection from '../../Components/PricingSection';
import Products from '../../Components/Products';
import HeroBanner from '../../Components/HeroBanner';




const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroBanner/>
      <Products/>
      {/* Add other sections of your homepage here */}
      <PricingSection />
  
      <Testimonial/>
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;