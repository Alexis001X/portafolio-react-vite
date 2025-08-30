import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-white">
            <div className="fade-in-up">
              <h1 className="display-4 fw-bold mb-3">
                Hola, soy {personal.name}
              </h1>
              <h2 className="h3 mb-4 opacity-90">
                {personal.title}
              </h2>
              <p className="lead mb-4 opacity-80">
                {personal.subtitle}
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button 
                  className="btn-primary-custom"
                  href="#projects"
                >
                  Ver Proyectos
                </Button>
                <Button 
                  variant="outline-light"
                  href="#contact"
                  className="border-2"
                >
                  Contáctame
                </Button>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <div className="fade-in-up">
              <div className="position-relative d-inline-block">
                <div 
                  className="rounded-circle overflow-hidden"
                  style={{ width: '300px', height: '300px', margin: '0 auto' }}
                >
                  <img 
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal.name)}&size=300&background=6366f1&color=ffffff`;
                    }}
                  />
                </div>
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                  style={{
                    background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
                    zIndex: -1,
                    transform: 'scale(1.1)'
                  }}
                ></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;