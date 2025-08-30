import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

const NavigationBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="navbar-custom"
      variant={theme}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold gradient-text">
          Portfolio
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Sobre Mí</Nav.Link>
            <Nav.Link href="#education">Formación</Nav.Link>
            <Nav.Link href="#experience">Experiencia</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#certifications">Certificaciones</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;