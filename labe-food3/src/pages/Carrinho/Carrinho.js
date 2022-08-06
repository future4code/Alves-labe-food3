import React from 'react'
import { Titulo } from './style'
import { Endereco } from './style'
import CarrinhoVazio from '../../components/CarrinhoVazio/CarrinhoVazio'
import CarrinhoComItens from '../../components/CarrinhoComItens/CarrinhoComItens'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function Carrinho() {
    return (
      <div>
          <Header/>
            <Endereco>
                <h3>Endereço de entrega</h3>
                <h3>Rua Alessandra Vieira, 42</h3>
            </Endereco>
            {/* <CarrinhoVazio/> */}
            <CarrinhoComItens/>
            <Footer/>
        </div>
    )

}
