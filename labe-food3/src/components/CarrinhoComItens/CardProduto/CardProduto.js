import React from 'react'
import {CardStyle, ImgProduto, Quantidade, DivStyle, DetalhesProduto} from './style'

export default function CardProduto() {

  const imgTest = "https://conteudo.imguol.com.br/c/entretenimento/4f/2022/05/03/hamburguer-1651610679144_v2_1x1.jpg"

  return (
    <CardStyle>
        <ImgProduto src={imgTest}/>
        <DetalhesProduto>
          <p>nome do produto</p>
          <p>descrição do produto</p>
          <h3>preço do produto</h3>
        </DetalhesProduto>
        <DivStyle>
          <Quantidade> 2 </Quantidade>
        </DivStyle>
    </CardStyle>
  )
}
