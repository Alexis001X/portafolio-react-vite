import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal, social } = portfolioData;

  const handleEmailClick = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent('Contacto desde Portfolio')}&body=${encodeURIComponent('Hola, me gustaría contactarte...')}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, vi tu portfolio y me gustaría contactarte');
    window.open(`https://wa.me/${personal.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handleTelegramClick = () => {
    window.open(`https://t.me/${personal.telegram || personal.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Contáctame
            </h2>
            <p className="lead text-muted">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="card-custom">
              <Card.Body className="p-5 text-center">
                <div className="mb-4">
                  <div 
                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className="fas fa-paper-plane text-white fs-3"></i>
                  </div>
                  <h4 className="fw-bold mb-3">¡Construyamos algo increíble juntos!</h4>
                  <p className="text-muted mb-4">
                    Estoy disponible para nuevos proyectos y oportunidades de colaboración.
                    No dudes en contactarme por cualquiera de estos medios.
                  </p>
                </div>
                
                <Row className="g-3">
                  <Col md={4}>
                    <Button 
                      className="btn-primary-custom w-100 py-3"
                      onClick={handleEmailClick}
                    >
                      <i className="fas fa-envelope me-2"></i>
                      Gmail
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button 
                      variant="outline-primary"
                      className="w-100 py-3"
                      onClick={handleWhatsAppClick}
                    >
                      <i className="fab fa-whatsapp me-2"></i>
                      WhatsApp
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button 
                      variant="outline-success"
                      className="w-100 py-3"
                      onClick={handleTelegramClick}
                    >
                      <i className="fab fa-telegram me-2"></i>
                      Telegram
                    </Button>
                  </Col>
                </Row>
                
                <hr className="my-4" />
                
                <div className="d-flex justify-content-center gap-3">
                  {Object.entries(social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary rounded-circle p-3"
                      style={{ width: '50px', height: '50px' }}
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;