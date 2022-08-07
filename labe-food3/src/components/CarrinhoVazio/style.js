import RadioGroup from '@material-ui/core/RadioGroup';
import styled from "styled-components";


export const StatusCarrinho = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 4vh;
`
export const  DetalhesDoValor = styled.section`
    display: flex;
    margin-top: 8vh;
    margin-left: 4vw;
    margin-right: 4vw;
    height: 16vh;   
    justify-content: space-between;
    border-bottom: 1px solid black;
`
export const Pagamento = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10vh;
    margin-top: 6vh;
    line-height: 1.7;
`
export const ValorAPagar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 8vh;
    width: 42vw;
    padding-bottom: 4vh;
    line-height: 2.2;
`
export const Preco = styled.h3`
    color: red;
`

export const DivStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 4vw;
    gap: 4vw;
    padding: 5px;

`
export const DivButton = styled.div`
    display: flex;
    justify-content: center;
    height: 34vh;
    align-items: flex-end;
`

export const Button = styled.button`
    width: 90vw;
    height: 6vh;
    background-color: rgb(245 145 151);
    border: none;
    border-radius: 1vw;` 


export const RadioGroupo = styled(RadioGroup)`
color: black !important;
margin-left:5vw;
`
