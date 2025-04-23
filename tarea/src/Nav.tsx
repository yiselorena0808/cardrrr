import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navb: React.FC = () => {
  return (
    <div>
      <Container fluid className="">
      <Navbar variant="dark" expand="lg" className="bg-dark">
        <Container>
        <Navbar.Brand as={Link} to="/">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navb;


