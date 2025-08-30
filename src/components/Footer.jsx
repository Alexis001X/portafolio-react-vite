import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <p className="mb-1">
              © 2025 {personal.name}. Todos los derechos reservados.
            </p>
            <p className="text-muted small mb-0">
              Desarrollado con React + Vite 
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;