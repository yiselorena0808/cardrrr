import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projectos = [
  { title: 'Graduarme', description: 'Sena Software', link: 'https://oferta.senasofiaplus.edu.co/sofia-oferta/' },
  { title: 'Tener un negocio', description: 'Empresa de Software', link: 'https://ingeneo.com.co/' },
  { title: 'Mucho dinero', description: 'Gracias a la empresa', link: 'https://ingeneo.com.co/' },
];

const Projectoss:React.FC=()=>{
  return (
    <Container className="mt-4">
      <Row>
        {projectos.map((proy, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{proy.title}</Card.Title>
                <Card.Text>{proy.description}</Card.Text>
                <Button variant="primary" href={proy.link} target="_blank">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
};
export default Projectoss;
