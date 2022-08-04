import React from 'react'
import CardProduto from './CardProduto/CardProduto'
import { NomeRestaurante, DivPai, InfoRestaurante } from './style'
import { DetalhesDoValor, Pagamento, ValorAPagar, Preco, DivStyle, Circulo, FormaDePagamento, DivButton, Button } from './style'
import Footer from '../Footer/Footer'

export default function CarrinhoComItens() {
  return (
    <DivPai>
      <InfoRestaurante>
        <NomeRestaurante>Bullger Villa Madalena</NomeRestaurante>
        <p>R. Fradique Coutinho, 1136 - Villa Madalena</p>
        <p>30 - 45 min</p>
      </InfoRestaurante>
      {/* <CardProduto /> */}
      {/* <CardProduto /> */}
      <CardProduto />
      <DetalhesDoValor>
        <Pagamento>
          <h3>SUBTOTAL</h3>
          <h4>Forma de pagamento</h4>
        </Pagamento>
        <ValorAPagar>
          <h4>Frete R$ 0,00</h4>
          <Preco>R$ 0.00</Preco>
        </ValorAPagar>
      </DetalhesDoValor>
      <FormaDePagamento>
        <DivStyle>
          <Circulo></Circulo>
          <h4>Dinheiro</h4>
        </DivStyle>
        <DivStyle>
          <Circulo></Circulo>
          <h4>Cartão de crédito</h4>
        </DivStyle>
        <DivButton>
        <Button>Confirmar</Button>
       </DivButton>
      </FormaDePagamento>
     
      <Footer />
    </DivPai>
  )
}
