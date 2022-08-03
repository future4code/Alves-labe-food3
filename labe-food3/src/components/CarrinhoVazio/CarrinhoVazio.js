import React from 'react'
import { StatusCarrinho } from './style'
import { DetalhesDoValor } from './style'
import { Pagamento } from './style'
import { ValorAPagar } from './style'

import { Button } from '@mui/material';


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
                    <h3>R$ 0.00</h3>
                </ValorAPagar>
            </DetalhesDoValor>
            <section>
                <div>
                    <div>círculo</div>
                    <h4>Dinheiro</h4>
                </div>
                <div>
                    <div>círculo</div>
                    <h4>Cartão de crédito</h4>
                </div>
            </section>
            <div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    margin="normal"
                >
                    Confirmar
                </Button>
            </div>
        </div>
    )
}
