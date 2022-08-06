import styled from "styled-components";

export const CardStyle = styled.div`
    display: flex;

    align-items:column;
    border: 1px solid #b8b8b8;
    margin-top: 2vh;
    margin-left: 4vw;
    height: 16vh;
    margin-right: 4vw;
    border-radius:10px;
    gap: 1rem;
`
export const ImgProduto = styled.img`
    width: 27vw;
    border-radius: 10% 0% 0% 10% / 10% 0% 0% 10% ;
    gap: 1rem;
`

export const DivStyle = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #E8222E;
    height: 4vh;
    width: 8vw;
    margin-left: 10vw;
    margin-bottom:1.2vh;
    border-radius:0% 30% 0% 30% / 0% 30% 0% 30%;
`

export const Quantidade = styled.p`
    margin-top: 0.3rem;
    color: #E8222E;
   
`
export const DetalhesProduto = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content:space-evenly;
    
`
export const NameProd = styled.p`
color:#E8222E;
font-size:1rem;
margin-top:1vh;
`

export const DescriptionCard = styled.p`
color: #b8b8b8;
font-size:0.9rem;
`

export const Preco = styled.h4`
margin-top:1vh;

`

export const ButtonCard = styled.button` 
background-color:#ffff;
border: 1px solid #E8222E;
color:#E8222E;
border-radius:10% 0% 11% 0% / 31% 0% 32% 0% ;
padding:1vw 5vw;
font-size:0.7rem;
margin-top:50px;
`
export const DivRight = styled.div`
display:flex;
flex-direction:column;
align-items: flex-end;
justify-content:space-between;
    border: 1px solid red;
    height: 4vh;
    width: 8vw;
    margin-left: 8vw;
`

export const Quantidade = styled.h4`
    margin-top: 0.3rem;
    color: red;
`
export const DetalhesProduto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vw;
    margin-top: 1vh;

`