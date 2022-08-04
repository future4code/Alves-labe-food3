import React from 'react'
import { StatusCarrinho, DetalhesDoValor, Pagamento, ValorAPagar, DivStyle, Circulo, Button, DivButton, Preco } from './style'
import Footer from '../Footer/Footer'


export default function CarrinhoVazio() {
    return (
        <div>
            <StatusCarrinho>
                <h4>CarrinhoVazio</h4>
            </StatusCarrinho>
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
            <section>
                <DivStyle>
                    <Circulo></Circulo>
                    <h4>Dinheiro</h4>
                </DivStyle>
                <DivStyle>
                    <Circulo></Circulo>
                    <h4>Cartão de crédito</h4>
                </DivStyle>
            </section>
            <DivButton>
                <Button> Confirmar</Button>
            </DivButton>
            <Footer/>
        </div>
    )
}
