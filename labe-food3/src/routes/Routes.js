import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "../components/Header/Header";
import Inicio from "../pages/InicialPage/Inicio";
import Login from "../pages/LoginPage/Login";
import Cadastro from "../pages/CadastroPage/Cadastro";
import Home from "../pages/HomePage/Home";
import Perfil from "../pages/PerfilPage/Perfil";
import Erro from "../pages/ErroPage/Erro";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Inicio/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={< Perfil />} />
          <Route path="*" element={<Erro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}