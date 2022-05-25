import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FiCheck, FiXCircle, FiChevronLeft } from "react-icons/fi";

import { useModalOverlay } from "../../hooks/ModalOverlay";

import OverlayEdit from "../../components/OverlayEdit";
import OverlayAlert from "../../components/OverlayAlert";

import api from "../../services/api";

import {
  Content,
  Header,
  Container,
  Title,
  UserDatas,
  Opportunities,
  Section,
  Button,
} from "./styles";

const InfoClient = () => {
  const { params } = useRouteMatch();
  const {
    newList,
    closedModalAlert,
    closedModalEdit,
    setClosedModalEdit,
    setClosedModalAlert,
  } = useModalOverlay();

  const [infos, setInfos] = useState({});

  useEffect(() => {
    api.get(`/users/${params.email}`).then((response) => {
      setInfos({
        opportunities: response.data.opportunitiesClient.opportunities,
        name: response.data.infoClient.name,
        email: response.data.infoClient.email,
        isActive: response.data.infoClient.isActive,
        phone: response.data.infoClient.phone,
        revenue: response.data.infoClient.revenue,
        agreedTerms: response.data.infoClient.agreedTerms,
      });
    });
  }, [newList, params.email]);

  if (!infos) {
    return <p>Loading ...</p>;
  }

  function addModalDelete() {
    setClosedModalAlert(false);
  }

  function addOverlay() {
    setClosedModalEdit(false);
  }

  return (
    <>
      {!closedModalEdit && <OverlayEdit infos={infos} />}
      {!closedModalAlert && <OverlayAlert email={infos.email} />}
      <Content>
        <Header>
          <Title>{infos.email}</Title>
          <Link to="/">
            <FiChevronLeft /> Voltar
          </Link>
        </Header>

        <Container>
          <UserDatas>
            <p>
              <strong>Nome:</strong> <span>{infos.name}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{infos.email}</span>
            </p>
            <p>
              <strong>Contato:</strong> <span>{infos.phone}</span>
            </p>
            <p>
              <strong>Renda:</strong> <span>{`R$ ${infos.revenue}`}</span>
            </p>
            <p>
              <strong>Ativo?</strong>{" "}
              {infos.isActive === false ? (
                <FiXCircle size={16} color={"#ed4a4a"} />
              ) : (
                <FiCheck size={16} color={"#61c742"} />
              )}
            </p>
            <p>
              <strong>Termos aceitos?</strong>{" "}
              {infos.agreedTerms === false ? (
                <FiXCircle size={16} color={"#ed4a4a"} />
              ) : (
                <FiCheck size={16} color={"#61c742"} />
              )}
            </p>
          </UserDatas>
          <Opportunities>
            <thead>
              <tr>
                <th>Destino</th>
                <th>Limite</th>
                <th>Interesse</th>
                <th>Prazo</th>
                <th>Ativo?</th>
              </tr>
            </thead>
            <tbody>
              {infos.opportunities &&
                infos.opportunities.map((opportunity) => (
                  <tr key={opportunity.name}>
                    <td>{opportunity.name}</td>
                    <td>{`R$ ${opportunity.limit / 100}`}</td>
                    <td>{opportunity.interest}</td>
                    <td>{`${opportunity.term} dias`}</td>
                    <td>
                      {opportunity.isActive ? (
                        <FiXCircle color={"#ed4a4a"} />
                      ) : (
                        <FiCheck color={"#61c742"} />
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Opportunities>

          <Section>
            <Button onClick={addOverlay} typeButton="edit">
              Editar cliente
            </Button>
            <Button onClick={addModalDelete} typeButton="erase">
              Excluir cliente
            </Button>
          </Section>
        </Container>
      </Content>
    </>
  );
};

export default InfoClient;
