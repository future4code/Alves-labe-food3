import React from "react";
import CardProduto from "./CardProduto/CardProduto";
import {
  NomeRestaurante,
  DivPai,
  InfoRestaurante,
  RadioGroupo,
  DetalhesDoValor,
  Pagamento,
  ValorAPagar,
  Preco,
} from "./style";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";

export default function CarrinhoComItens() {
  const [value, setValue] = useState("dinheiro");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <DivPai>
      <InfoRestaurante>
        <NomeRestaurante>Bullger Villa Madalena</NomeRestaurante>
        <p>R. Fradique Coutinho, 1136 - Villa Madalena</p>
        <p>30 - 45 min</p>
      </InfoRestaurante>
      <CardProduto />
      {/* <CardProduto />
      <CardProduto /> */}
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
      <FormControl>
        <RadioGroupo
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="dinheiro"
            control={<Radio color="secundary" />}
            label="Dinheiro"
          />
          <FormControlLabel
            value="cartao"
            control={<Radio color="secundary" />}
            label="Cartão de crédito"
          />
        </RadioGroupo>
      </FormControl>
    </DivPai>
  );
}
