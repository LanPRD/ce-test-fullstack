import React from "react";
import { Form } from "@unform/web";

import { useModalOverlay } from "../../hooks/ModalOverlay";

import api from "../../services/api";

import InputFieldText from "../InputFieldText";
import InputFieldRadio from "../InputFieldRadio";

import {
  Container,
  TitleForm,
  ButtonContainer,
  Button,
  OverlayContainer,
} from "./styles";

const ModalOverlay = () => {
  const { setClosedModalOverlay, newList, setNewList } = useModalOverlay();

  async function formSubmit(data) {
    const dataFormated = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      revenue: Number(data.revenue),
      isActive: data.isActive === "true",
      agreedTerms: data.agreedTerms === "true",
    };

    await api.post("/", dataFormated);
    setClosedModalOverlay(true);
    setNewList(!newList);
  }

  function buttonCancel(event) {
    event.preventDefault();
    setClosedModalOverlay(true);
  }

  return (
    <OverlayContainer>
      <Container>
        <Form onSubmit={formSubmit}>
          <InputFieldText name="name" placeholder="Nome" />
          <InputFieldText name="email" placeholder="Email" />
          <InputFieldText name="phone" placeholder="Contato" />
          <InputFieldText name="revenue" placeholder="Renda" />

          <TitleForm>Cliente Ativo?</TitleForm>
          <InputFieldRadio
            name="isActive"
            options={[
              { label: "Sim", value: true },
              { label: "Não", value: false },
            ]}
          />

          <TitleForm>Cliente aceitou os termos?</TitleForm>
          <InputFieldRadio
            name="agreedTerms"
            options={[
              { label: "Sim", value: true },
              { label: "Não", value: false },
            ]}
          />

          <ButtonContainer>
            <Button typeButton="finished">Finalizar</Button>
            <Button onClick={buttonCancel} typeButton="cancel">
              Cancelar
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </OverlayContainer>
  );
};

export default ModalOverlay;
