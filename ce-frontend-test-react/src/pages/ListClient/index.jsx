import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

import { useModalOverlay } from "../../hooks/ModalOverlay";

import ModalOverlay from "../../components/OverlayContainer";

import api from "../../services/api";

import { Content, Title, Container, Button } from "./styles";

const ListClient = () => {
  const [clientList, setClientList] = useState([]);
  const { closedModalOverlay, setClosedModalOverlay, newList } =
    useModalOverlay();

  useEffect(() => {
    api.get("/").then((response) => {
      setClientList(Object.values(response.data).map((data) => data));
    });
  }, [newList]);

  function addOverlay(event) {
    event.preventDefault();
    setClosedModalOverlay(false);
  }

  return (
    <>
      {!closedModalOverlay && <ModalOverlay />}
      <Content>
        <Title>Lista de clientes</Title>
        <Container>
          {Object.keys(clientList).map((client, key) => (
            <Link
              key={key}
              to={`/users/${clientList[client.toString()].email}`}
            >
              <strong>{clientList[client.toString()].name}</strong>

              <span>
                Ver detalhes
                <AiOutlineRight size={10} />
              </span>
            </Link>
          ))}

          <Button onClick={addOverlay}>Adicionar cliente</Button>
        </Container>
      </Content>
    </>
  );
};

export default ListClient;
