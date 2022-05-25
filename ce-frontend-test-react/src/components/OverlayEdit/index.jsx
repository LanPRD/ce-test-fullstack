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

const ModalOverlay = ({ infos }) => {
  const { setClosedModalEdit, newList, setNewList } = useModalOverlay();

  function buttonCancel(event) {
    event.preventDefault();
    setClosedModalEdit(true);
  }

  async function formSubmit(data) {
    const dataFormated = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      revenue: Number(data.revenue),
      isActive: data.isActive === "true",
      agreedTerms: data.agreedTerms === "true",
    };

    await api.put(`/users/${infos.email}`, dataFormated);
    setClosedModalEdit(true);
    setNewList(!newList);
  }

  return (
    <OverlayContainer>
      <Container>
        <Form onSubmit={formSubmit}>
          <InputFieldText
            name="name"
            placeholder="Nome"
            defaultValue={infos.name}
          />
          <InputFieldText
            name="email"
            placeholder="Email"
            defaultValue={infos.email}
          />
          <InputFieldText
            name="phone"
            placeholder="Contato"
            defaultValue={infos.phone}
          />
          <InputFieldText
            name="revenue"
            placeholder="Renda"
            defaultValue={infos.revenue}
          />

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
