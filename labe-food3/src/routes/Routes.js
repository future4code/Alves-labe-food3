import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Inicial/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={< Perfil />} />
          <Route path="erro" element={<Erro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}