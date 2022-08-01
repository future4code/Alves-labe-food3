import React from 'react'
import {ContainerErroImage} from './styled'
import erroimg from '../../assets/erro.png'


export default function Erro() {
  return (
    <div>
    
    <ContainerErroImage>
      <img src ={erroimg}/>
      <h1>Página não Localizada :(</h1>
      </ContainerErroImage>
      </div>
  )
}
