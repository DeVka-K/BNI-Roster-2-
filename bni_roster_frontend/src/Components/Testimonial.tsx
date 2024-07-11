import React from 'react';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      name: "Ananya Nair",
      position: "CEO, EventCo Solutions",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      rating: 4.5,
      quote: "My BNI experience has exceeded my expectations. The BNI system has completely changed the way I looked at my business. I'm into the business of event consulting and management. This system has contributed almost 4cr of business in the last three years to my company."
    },
    {
      name: "Meera Pillai",
      position: "MD, Elite Event Management",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp",
      rating: 5,
      quote: "Joining BNI has been one of the best decisions for my event consulting and management business. The structured networking and referral system have brought in 4 crores worth of business in the last three years. BNI has also enriched my life with wonderful friendships and a supportive professional community that I deeply value."
    },
    {
      name: "Lakshmi Menon",
      position: " Founder, Premier Events & Consultancy",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp",
      rating: 4,
      quote: "BNI has revolutionized my approach to business growth. In the event consulting and management industry, the network and referrals provided by BNI have been invaluable, generating 4 crores of business over three years. The bonus? The amazing friendships and connections I've made, which have enhanced both my personal and professional life."
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star fa-sm text-info"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt fa-sm text-info"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star fa-sm text-info"></i>);
      }
    }
    return stars;
  };

  const sectionStyle: React.CSSProperties = {
    color: '#000',
    backgroundColor: '#ffffff'
  };

  const cardStyle: React.CSSProperties = {
    borderRadius: '0.7rem'
  };

  const imageStyle: React.CSSProperties = {
    width: '100px',
    height: '100px'
  };

  return (
    <section style={sectionStyle}>
      <div style={{ padding: '3rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Testimonials</h3>
            <p style={{ marginBottom: '2rem' }}>
            In the past years, our members have experienced unparalleled growth and success. The BNI system has facilitated valuable connections, leading to significant business contributions and professional development.
            
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ width: '100%', maxWidth: '350px', margin: '0 1rem 2rem' }}>
              <div style={{ ...cardStyle, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <img src={testimonial.image}
                    alt={testimonial.name}
                    style={{ ...imageStyle, borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.15)' }} />
                </div>
                <h5 style={{ fontWeight: 'bold' }}>{testimonial.name}</h5>
                <h6 style={{ fontWeight: 'bold', margin: '0.75rem 0' }}>{testimonial.position}</h6>
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
                  {renderStars(testimonial.rating)}
                </ul>
                <p style={{ marginBottom: '0.5rem' }}>
                  <i className="fas fa-quote-left" style={{ marginRight: '0.5rem' }}></i>
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;