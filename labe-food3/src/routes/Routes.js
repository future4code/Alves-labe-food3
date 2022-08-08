import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "../pages/InicialPage/Inicio";
import Login from "../pages/LoginPage/Login";
import Cadastro from "../pages/CadastroPage/Cadastro";
import Home from "../pages/HomePage/Home";
import Perfil from "../pages/PerfilPage/Perfil";
import Erro from "../pages/ErroPage/Erro";
import Endereco from "../pages/EnderecoPage/Endereco";
import EditUsuario from  '../pages/PerfilPage/EditUsuario/EditUsuario'
import Carrinho from "../pages/Carrinho/Carrinho";
import EditEndereco from  '../pages/PerfilPage/EditEndereco/EditEndereco'
import {DetalhesPage} from '../pages/DetalhesPage/DetalhesPage'
import { HomeTest } from "../pages/HomePage/HomeTest";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route index element={<Inicio/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/endereco" element={<Endereco />} />
          <Route path="/home" element={< HomeTest />} />
          <Route path="/perfil" element={< Perfil />}/>
          <Route path="/edit/usuario" element={< EditUsuario />} />
          <Route path="/home/restaurantes" element={< DetalhesPage />} />
          <Route path="/carrinho" element={< Carrinho/>} />
          <Route path="/edit/endereco" element={< EditEndereco />} />
          <Route path="*" element={<Erro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}