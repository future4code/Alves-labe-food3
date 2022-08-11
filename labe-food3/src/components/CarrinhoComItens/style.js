
import RadioGroup from '@material-ui/core/RadioGroup';
import styled from "styled-components";

export const NomeRestaurante = styled.h4`
    color: red;
`
export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const InfoRestaurante = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    margin-left: 4vw;
    row-gap: 1vh;

`

export const  DetalhesDoValor = styled.section`
    display: flex;
    margin-left: 4vw;
    margin-right: 4vw;
    margin-bottom: 1vh;
    height: 18vh;   
    justify-content: space-between;
    border-bottom: 1px solid black;
    position: relative;
`
export const Pagamento = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 6vh;
    gap: 2vh;
    margin-top: 8vh ;

`
export const ValorAPagar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 8vh;
    width: 42vw;
    margin-top: 2vh;
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

export const RadioGroupo = styled(RadioGroup)`
color: black;
margin-left:5vw;
`

export const ButtonGo = styled.button`
  border: none;
  background-color: #e8222e;
  font-size: 4.5vw;
  padding: 1.5vh 9vw;
  margin-top: 1vh;
`;
