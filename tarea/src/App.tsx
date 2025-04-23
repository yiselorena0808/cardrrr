import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navb from './Nav';
import Home from './Home';
import Projectoss from './Proyectos';
import Contacto from './Contacto';

function App() {
  return (
    <Router>
      <Navb></Navb>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projectoss />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;

