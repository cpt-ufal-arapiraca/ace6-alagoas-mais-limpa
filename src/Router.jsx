
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Administrador from './pages/Administrador';
import Visitante from './pages/Visitante';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/visitante" element={<Visitante/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default Router;
