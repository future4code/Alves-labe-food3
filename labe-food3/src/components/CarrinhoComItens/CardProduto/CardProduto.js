import React from 'react'
import {CardStyle, ImgProduto, Quantidade, DivStyle, DetalhesProduto, NameProd, DescriptionCard, Preco, ButtonCard, DivRight} from './style'

export default function CardProduto() {

  const imgTest = "https://conteudo.imguol.com.br/c/entretenimento/4f/2022/05/03/hamburguer-1651610679144_v2_1x1.jpg"

  return (
    <CardStyle>
        <ImgProduto src={imgTest}/>
        <DetalhesProduto>
          <NameProd><b>nome do produto</b></NameProd>
          <DescriptionCard>descrição do produto</DescriptionCard>
          <Preco>R$15,00</Preco>
        </DetalhesProduto>
        <DivRight>
        <DivStyle>
          <Quantidade> 2 </Quantidade>
        </DivStyle>
        <ButtonCard>remover</ButtonCard>
        </DivRight>

    </CardStyle>
  )
}
