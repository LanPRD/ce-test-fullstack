import styled, { css } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 448px;
  max-width: 600px;

  padding: 40px 0px;

  background: #eef2f3;
`;

export const TitleForm = styled.p`
  font-weight: 700;

  margin-bottom: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;

  margin-top: 16px;
`;

export const Button = styled.button`
  height: 40px;
  width: 160px;

  border: none;
  border-radius: 5px;

  color: white;
  font-weight: 700;

  ${(props) =>
    props.typeButton === "finished"
      ? css`
          background: #61c742;
        `
      : css`
          background: #ed4a4a;
        `}

  &:hover {
    ${(props) =>
      props.typeButton === "finished"
        ? css`
            background: ${shade(0.2, "#61c742")};
          `
        : css`
            background: ${shade(0.2, "#ed4a4a")};
          `};
  }
`;

export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`;
