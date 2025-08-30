import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Certificaciones y Talleres
            </h2>
            <p className="lead text-muted">
              Formación continua y especialización profesional
            </p>
          </Col>
        </Row>
        
        <Row>
          {certifications.map((cert, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="card-custom h-100">
                <div className="p-3 text-center">
                  <div 
                    className="bg-primary rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className="fas fa-certificate text-white fs-3"></i>
                  </div>
                </div>
                
                <Card.Body className="text-center">
                  <h5 className="fw-bold mb-2">{cert.name}</h5>
                  <h6 className="text-primary mb-2">{cert.issuer}</h6>
                  <Badge bg="secondary" className="mb-3">
                    {cert.date}
                  </Badge>
                  <p className="text-muted font-mono small">
                    ID: {cert.credentialId}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;