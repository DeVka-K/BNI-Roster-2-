import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'; // Import Animate.css
 
const HeroBanner: React.FC = () => {
  const heroBannerStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    padding: '50px 0',
    textAlign: 'left'
  };
 
  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    marginBottom: '20px'
  };
 
  const paragraphStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    marginBottom: '20px'
  };
 
  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '1rem'
  };
 
  return (
<div className="hero-banner" style={heroBannerStyle}>
<Container>
<Row className="align-items-center">
<Col md={6}>
<h1 className="animate__animated animate__fadeInLeft" style={headingStyle}>
              Boost your building process with <span className="text-success">BNI Generator</span>
</h1>
<p className="animate__animated animate__fadeInLeft animate__delay-1s" style={paragraphStyle}>
              Get the career you deserve.
</p>
<Button variant="success" className="animate__animated animate__fadeInLeft animate__delay-2s" style={buttonStyle}>
              Learn More
</Button>
</Col>
<Col md={6}>
<img src="/Images/zone_landing.webp" alt="Hero Banner" className="img-fluid animate__animated animate__fadeInRight" />
</Col>
</Row>
</Container>
</div>
  );
}
 
export default HeroBanner;