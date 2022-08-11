import React from "react";
import {
  StatusCarrinho,
  DetalhesDoValor,
  Pagamento,
  ValorAPagar,
  DivStyle,
  Button,
  DivButton,
  Preco,
  RadioGroupo
} from "./style";
import  FormControl  from "@material-ui/core/FormControl";
import Footer from "../Footer/Footer";
import  Radio  from "@material-ui/core/Radio";
import  FormControlLabel  from "@material-ui/core/FormControlLabel";
import { useState } from "react";

export default function CarrinhoVazio() {
    const [value, setValue] = useState('dinheiro');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
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
        <FormControl >
       
       <RadioGroupo 
         aria-labelledby="demo-controlled-radio-buttons-group"
         name="controlled-radio-buttons-group"
         value={value}
         onChange={handleChange}
       >
         
         <FormControlLabel value="dinheiro" control={<Radio color="primary" />} label="Dinheiro" />
         <FormControlLabel value="cartao" control={<Radio color='secundary'/>} label="Cartão de crédito" />
      
      </RadioGroupo>
      </FormControl>
        </DivStyle>
      </section>
      <DivButton>
        <Button> Confirmar</Button>
      </DivButton>
      <Footer />
    </div>
  );
}
