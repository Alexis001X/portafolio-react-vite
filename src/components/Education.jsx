import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding bg-light" data-theme-bg="secondary">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Formación Académica
            </h2>
            <p className="lead text-muted">
              Mi trayectoria educativa y preparación profesional
            </p>
          </Col>
        </Row>
        
        <Row>
          {education.map((edu, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card className="card-custom h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary rounded-circle p-3 me-3 flex-shrink-0">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-2">{edu.degree}</h4>
                      <h6 className="text-primary mb-2">{edu.institution}</h6>
                      <p className="text-muted mb-2 font-mono">{edu.period}</p>
                      <p className="mb-0">{edu.description}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;