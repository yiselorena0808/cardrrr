import React, { useState } from 'react';
import Mymodal from './MyModal';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Contacto = () => {

  const handleSubmit = (yooooo) => {
    yooooo.preventDefault();
  };

  return (
    <Container className="mt-4">
      <h2>Contacto</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>
        <Mymodal></Mymodal>
      </Form>
    </Container>
  );
};

export default Contacto;

