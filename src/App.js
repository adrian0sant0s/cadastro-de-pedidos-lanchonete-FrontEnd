import React from "react";

import Logo1 from "./assets/logo1.svg";
import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles.js";

function App() {
  return (
    <Container>
      <ContainerItens>
        <Image alt="Image-hamburguer" src={Logo1}></Image>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 coca-cola, 1 x-tudo"></Input>

        <InputLabel>Nome do cliente</InputLabel>
        <Input placeholder="Steve"></Input>
        <Button>Novo pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
