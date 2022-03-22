import React, { useRef, useState } from "react";
import axios from "axios";

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
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewSolicitation() {
    const data = await axios.post("http://localhost:3003/users", {
      order: inputOrder.current.value,
      name: inputName.current.value,
    });
    console.log(data);
    // setRequest([
    //   ...request,
    //   {
    //     id: Math.random(),
    //     order: inputOrder.current.value,
    //     name: inputName.current.value,
    //   },
    // ]);
  }

  function deleted(requestId) {
    const newRequest = request.filter((requests) => request.id !== requestId);
    setRequest(newRequest);
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt="Image-hamburguer" src={Logo1}></Image>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 coca-cola, 1 x-tudo"></Input>

        <InputLabel>Nome do cliente</InputLabel>
        <Input ref={inputName} placeholder="Steve"></Input>
        <Button onClick={addNewSolicitation}>Novo pedido</Button>

        <ul>
          {request.map((solicitation) => (
            <Solicitation key={request.id}>
              <div>
                <p>{solicitation.order}</p> <p>{solicitation.name}</p>
              </div>
              <button onClick={() => deleted(request.id)}>
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
