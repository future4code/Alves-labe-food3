import React,{useEffect} from 'react'
import LogoInicial from '../../assets/logoInicial.png'
import { Grow } from '@material-ui/core';
import {ContanierLogo} from './styled'
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  }, [navigate]);


  return (
    <ContanierLogo>
      <Grow in={true} timeout={2500} >
      <img src={LogoInicial}></img>
      </Grow>
    </ContanierLogo>
  )
}
