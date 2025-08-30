import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { technicalSkills, softSkills } = portfolioData;

  const groupedSkills = technicalSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="section-padding bg-light" data-theme-bg="secondary">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Habilidades
            </h2>
            <p className="lead text-muted">
              Competencias técnicas y habilidades blandas
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mb-5">
            <Card className="card-custom">
              <Card.Header className="bg-transparent">
                <h4 className="fw-bold mb-0">Habilidades Técnicas</h4>
              </Card.Header>
              <Card.Body className="p-4">
                {Object.entries(groupedSkills).map(([category, skills]) => (
                  <div key={category} className="mb-4">
                    <h6 className="fw-semibold text-primary mb-3">{category}</h6>
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-medium">{skill.name}</span>
                          <span className="text-muted">{skill.level}%</span>
                        </div>
                        <ProgressBar 
                          now={skill.level} 
                          className="rounded-pill"
                          style={{ height: '8px' }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="card-custom">
              <Card.Header className="bg-transparent">
                <h4 className="fw-bold mb-0">Habilidades Blandas</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="d-flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge 
                      key={index}
                      bg="primary" 
                      className="fs-6 p-2 rounded-pill"
                    >
                      {skill}
                    </Badge>
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

export default Skills;