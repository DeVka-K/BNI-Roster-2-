import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Styles/Products.css';



interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(product.link);
  };

  // const handleClick = (link: string) => {
  //   navigate(link);
  // };


  return (
    <Col md={6} lg={3} className="mb-4">
      <Card className="product-card" onClick={handleClick}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Excel to PDF',
      description: 'Convert Excel files to PDF',
      image: '/images/excel-logo-0.png',
      link: '/excel-to-pdf',
    },
    {
      id: 2,
      name: 'Form to PDF',
      description: 'Convert Forms to PDF',
      image: '/images/form-logo.jpg',
      link: '/form-to-pdf',
    },
    {
      id: 3,
      name: 'JSON to PDF',
      description: 'Convert JSON files to PDF',
      image: '/images/json-logo-png-transparent.png',
      link: '/json-to-pdf',
    },
    {
      id: 4,
      name: 'CSV to PDF',
      description: 'Convert CSV files to PDF',
      image: '/images/csv-to-pdf.png',
      link: '/csv-to-pdf',
    },
  ];

  return (
    <Container className="text-center my-5">
      <h2 className="mb-4">
        Meet Our <span className="text-success">Product Family</span>
      </h2>
      <Row>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};


export default Products;
