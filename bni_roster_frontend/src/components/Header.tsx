// src/components/Header.tsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
      <span>Logo</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#aboutus">About Us</Nav.Link>
        </Nav>
        <button className="btn btn-outline-dark">Sign up</button>
        <button className="btn btn-outline-dark">Log In</button>
      </Container>
    </Navbar>
  );
};

export default Header;
