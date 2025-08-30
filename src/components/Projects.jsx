import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding bg-light" data-theme-bg="secondary">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Proyectos
            </h2>
            <p className="lead text-muted">
              Algunos de mis trabajos más destacados
            </p>
          </Col>
        </Row>
        
        <Row>
          {projects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card className="card-custom h-100">
                <div className="overflow-hidden rounded-top">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x200/6366f1/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  {project.featured && (
                    <Badge 
                      bg="warning" 
                      className="position-absolute top-0 start-0 m-3"
                    >
                      Destacado
                    </Badge>
                  )}
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <h5 className="fw-bold mb-2">{project.title}</h5>
                  <p className="text-muted mb-3 flex-grow-1">
                    {project.description}
                  </p>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        bg="primary" 
                        className="me-2 mb-2"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="d-flex gap-2 mt-auto">
                    <Button 
                      href={project.liveUrl}
                      target="_blank"
                      className="btn-primary-custom flex-fill"
                      size="sm"
                    >
                      Ver Demo
                    </Button>
                    <Button 
                      href={project.githubUrl}
                      target="_blank"
                      variant="outline-primary"
                      className="flex-fill"
                      size="sm"
                    >
                      Código
                    </Button>
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

export default Projects;