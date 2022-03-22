import React, { useEffect, useState } from "react";
import axios from "axios";

import Logo2 from "../../assets/logo2.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  ContainerItens,
  Image,
  H1,
  Button,
  Solicitation,
} from "./styles.js";

function Order() {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    async function fetchOrder() {
      const { data: newSolicitations } = await axios.get(
        "http://localhost:3003/users"
      );
      setRequest(newSolicitations);
    }

    fetchOrder();
  }, []);

  async function deleted(solicitationtId) {
    await axios.delete(`http://localhost:3003/users/${solicitationtId}`);
    const newRequest = request.filter(
      (solicitation) => solicitation.id !== solicitationtId
    );
    setRequest(newRequest);
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt="Image-hamburguer" src={Logo2}></Image>
        <H1>Pedidos!</H1>

        <ul>
          {request.map((solicitation) => (
            <Solicitation key={solicitation.id}>
              <div>
                <p>{solicitation.order}</p> <p>{solicitation.name}</p>
              </div>
              <button onClick={() => deleted(solicitation.id)}>
                <img src={Trash} alt="lata-lixo" />
              </button>
            </Solicitation>
          ))}
        </ul>

        <Button>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Order;
