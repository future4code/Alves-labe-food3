import React from 'react'
import { DescriptionEndereco, Titulo } from './style'
import { Endereco, TitleEndereco } from './style'
import CarrinhoVazio from '../../components/CarrinhoVazio/CarrinhoVazio'
import CarrinhoComItens from '../../components/CarrinhoComItens/CarrinhoComItens'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Carrinho() {
    return (

        <div>
            <Header title = 'Meu Carrinho'/>

            <Endereco>
                <TitleEndereco>Endereço de entrega</TitleEndereco>
                <DescriptionEndereco><b>Rua Alessandra Vieira, 42</b></DescriptionEndereco>
            </Endereco>
            {/* <CarrinhoVazio/> */}
            <CarrinhoComItens/>
<Footer/>
        </div>
    )

}
