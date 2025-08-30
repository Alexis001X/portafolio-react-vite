import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Experiencia Profesional
            </h2>
            <p className="lead text-muted">
              Mi trayectoria en el desarrollo de software
            </p>
          </Col>
        </Row>
        
        <Row>
          {experience.map((exp, index) => (
            <Col lg={12} className="mb-4" key={index}>
              <Card className="card-custom">
                <Card.Body className="p-4">
                  <Row>
                    <Col md={8}>
                      <h4 className="fw-bold mb-2">{exp.position}</h4>
                      <h6 className="text-primary mb-2">{exp.company}</h6>
                      <p className="text-muted mb-3">{exp.description}</p>
                      
                      <h6 className="fw-semibold mb-2">Logros principales:</h6>
                      <ul className="list-unstyled">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </Col>
                    
                    <Col md={4} className="text-md-end">
                      <Badge 
                        bg="primary" 
                        className="font-mono fs-6 p-2"
                      >
                        {exp.period}
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;