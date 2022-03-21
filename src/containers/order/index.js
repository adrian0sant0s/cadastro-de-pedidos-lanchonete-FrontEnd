import React from "react";

import Logo2 from "../../assets/logo2.svg";
// import Trash from "../../assets/trash.svg";
import {
  Container,
  ContainerItens,
  Image,
  H1,
  Button,
  // Solicitation,
} from "./styles.js";

function Order() {
  return (
    <Container>
      <ContainerItens>
        <Image alt="Image-pacote" src={Logo2}></Image>
        <H1>Pedidos!</H1>

        <Button>Pedidos</Button>
      </ContainerItens>
    </Container>
  );
}

export default Order;
