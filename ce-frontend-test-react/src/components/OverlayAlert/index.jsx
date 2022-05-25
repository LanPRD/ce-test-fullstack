import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  TitleForm,
  ButtonContainer,
  Button,
  OverlayContainer,
} from "./styles";

import { useModalOverlay } from "../../hooks/ModalOverlay";

import api from "../../services/api";

const OverlayAlert = ({ email }) => {
  const { closedModalAlert, setClosedModalAlert } = useModalOverlay();

  async function deleteFunction() {
    await api.delete(`/users/${email}`);
    setClosedModalAlert(true);
  }

  function closeOverlay() {
    setClosedModalAlert(true);
  }

  return (
    <OverlayContainer>
      <Container>
        <TitleForm>Continuar com a exclusão?</TitleForm>
        <ButtonContainer>
          <Link to="/">
            <Button onClick={deleteFunction} typeButton="finished">
              Sim
            </Button>
          </Link>
          <Button onClick={closeOverlay} typeButton="cancel">
            Não
          </Button>
        </ButtonContainer>
      </Container>
    </OverlayContainer>
  );
};

export default OverlayAlert;
