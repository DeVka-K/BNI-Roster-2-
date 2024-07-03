import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Pricings.css"

const PricingCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  color: string;
}> = ({ title, price, features, color }) => (
  <div className={`card h-100 shadow-sm ${color}`}>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title text-center">{title}</h5>
      <h2 className="card-price text-center mb-4">{price}</h2>
      <ul className="list-unstyled mt-3 mb-4">
        {features.map((feature, index) => (
          <li key={index}>→ {feature}</li>
        ))}
      </ul>
    </div>
  </div>
);

const PricingSection: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        <span className="text-success">Transparent</span> Pricing
      </h2>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col mb-4">
          <PricingCard
            title="Free"
            price="$00"
            features={[
              "One end Product",
              "12months update",
              "6 months of support",
              "one time payment",
              "more templates"
            ]}
            color="bg-light-green"
          />
        </div>
        <div className="col mb-4">
          <PricingCard
            title="Plus"
            price="$99"
            features={[
              "one end product",
              "18 months update",
              "9months of support",
              "one time payment",
              "more templates",
              "1500 generations"
            ]}
            color="bg-light-yellow"
          />
        </div>
        <div className="col mb-4">
          <PricingCard
            title="Extended"
            price="$199"
            features={[
              "one end product",
              "24 months update",
              "12 months support",
              "one time payment",
              "more templates",
              "unlimited generation"
            ]}
            color="bg-light-purple"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;