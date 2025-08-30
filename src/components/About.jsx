import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Sobre Mí
            </h2>
            <p className="lead text-muted">
              Conoce más sobre mi trayectoria profesional
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="card-custom p-4">
              <Card.Body>
                <p className="fs-5 mb-4 lh-lg">
                  {about.description}
                </p>
                
                <h4 className="fw-semibold mb-3">Aspectos Destacados:</h4>
                <ListGroup variant="flush">
                  {about.highlights.map((highlight, index) => (
                    <ListGroup.Item 
                      key={index}
                      className="d-flex align-items-center border-0 ps-0"
                      style={{ background: 'transparent' }}
                    >
                      <span className="text-primary me-3">▶</span>
                      {highlight}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;