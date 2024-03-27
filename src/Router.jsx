import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Visitante from './pages/Visitante';
import SignUp from './pages/Signup';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/visitante" element={<Visitante/>} />
        <Route path="/criarConta" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default Router;