import styled from "styled-components";
import { shade } from "polished";

export const Content = styled.div`
  height: 100vh;

  margin: 0 auto;
  max-width: 960px;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 3.6rem;

  margin: 0 0 24px 0;
`;

export const Container = styled.div`
  position: relative;

  max-width: 400px;

  margin: 0 0 0 24px;

  a {
    color: #262626;
    background: white;

    display: flex;
    align-items: center;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;

    text-decoration: none;

    padding: 16px 16px;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(8px);

      span {
        color: ${shade(0.3, "#61c742")};
      }
    }

    & + a {
      margin: 16px 0;
    }

    strong {
      margin: 0 8px;
    }

    span {
      display: flex;
      align-items: center;

      font-size: 12px;

      position: absolute;
      right: 16px;
    }
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 160px;

  border: none;
  border-radius: 5px;

  color: white;
  font-weight: 700;

  background: #61c742;

  &:hover {
    background: ${shade(0.2, "#61c742")};
  }
`;
