import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'; 

const Home: React.FC = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center mt-5">
      <Row>
        <Col md className="text-center">
          <Image 
            src='https://th.bing.com/th/id/OIP.t1GZkhnxCf8Hqwg3CChg0AHaJA?rs=1&pid=ImgDetMain' 
          />
        </Col>
        <Col className="bg-success text-white text-center mb-3">
          <h2>Hola, soy Yisel Lorena Salazar Velasco</h2>
          <p>
            Soy desarrollador web. Actualmente estoy estudiando en el SENA.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
