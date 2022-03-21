import React, { useState } from "react";

import Logo1 from "../../assets/logo1.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
  Solicitation,
} from "./styles.js";

function App() {
  const [request, setRequest] = useState([]);
  const [order, setOrder] = useState();
  const [name, setName] = useState();

  function addNewSolicitation() {
    setRequest([{ id: Math.random, order, name }]);
  }

  function changeInputOrder(event) {
    setOrder(event.target.value);
  }

  function changeInputName(event) {
    setName(event.target.value);
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt="Image-hamburguer" src={Logo1}></Image>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input
          onChange={changeInputOrder}
          placeholder="1 coca-cola, 1 x-tudo"
        ></Input>

        <InputLabel>Nome do cliente</InputLabel>
        <Input onChange={changeInputName} placeholder="Steve"></Input>
        <Button onClick={addNewSolicitation}>Novo pedido</Button>

        <ul>
          {request.map((solicitation) => (
            <Solicitation key={request.id}>
              <div>
                <p>{solicitation.order}</p> <p>{solicitation.name}</p>
              </div>
              <button>
                <img src={Trash} alt="lata-lixo" />
              </button>
            </Solicitation>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
