import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  cursor: pointer;

  & + label {
    margin-right: 16px;
  }
`;
