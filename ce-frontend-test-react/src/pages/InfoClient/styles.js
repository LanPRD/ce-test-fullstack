import styled, { css } from "styled-components";
import { shade } from "polished";

export const Content = styled.div`
  height: 100vh;

  margin: 0 auto;
  max-width: 960px;
  padding: 40px 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    transition: transform 0.2s;

    color: darkblue;

    &:hover {
      transform: translateX(-8px);
      color: ${shade(0.3, "#61c742")};
    }
  }
`;

export const Container = styled.div`
  margin: 0 0 0 24px;
`;

export const Title = styled.h1`
  font-size: 3.6rem;

  margin: 0 0 24px 0;
`;

export const UserDatas = styled.div`
  p {
    display: flex;
    align-items: center;

    & + p {
      margin-top: 4px;
    }

    span {
      margin-left: 8px;
    }

    svg {
      margin-left: 8px;
    }
  }
`;

export const Opportunities = styled.table`
  margin: 32px auto;

  width: 70%;

  td {
    text-align: center;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  height: 40px;
  width: 160px;

  border: none;
  border-radius: 5px;

  color: white;
  font-weight: 700;

  ${(props) =>
    props.typeButton === "edit"
      ? css`
          background: #61c742;
        `
      : css`
          background: #ed4a4a;
        `}

  &:hover {
    ${(props) =>
      props.typeButton === "edit"
        ? css`
            background: ${shade(0.2, "#61c742")};
          `
        : css`
            background: ${shade(0.2, "#ed4a4a")};
          `};
  }
`;
