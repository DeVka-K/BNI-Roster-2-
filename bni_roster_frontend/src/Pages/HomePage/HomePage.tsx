import React from 'react';
import PricingSection from '../../Components/PricingSection';
import Products from '../../Components/Products';


const HomePage: React.FC = () => {
  return (
    <div className="home-page">
  
      <Products/>
      {/* Add other sections of your homepage here */}
      <PricingSection />
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;