import styled from "styled-components";
import { darken, transparentize } from "polished";

interface ButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#E52E4D",
  red: "#22CC95",
};

export const ButtonTransaction = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

export const Button = styled.div<ButtonProps>`
  height: 3rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid #d7d7d7;
  display: flex;
  transition: border-color 0.5s;
  cursor: pointer;
  color: #ccc;
  border-radius: 0.3rem;
  margin-bottom: 0.7rem;
  background: ${(props) => {
    return props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent";
  }};

  &:hover {
    border-color: ${darken(0.4, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
    margin-top: 0.1rem;
  }
  span {
    display: flex;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 0.35rem;
    margin-bottom: 0.75rem;
    &::placeholder {
      color: var(--text-body);
    }

    @media (max-width: 800px) {
      width: 100%;
      height: 3rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    color: #fff;
    height: 3.5rem;
    border-radius: 0.35rem;
    width: 100%;
    border: 0;
    font-size: 1rem;
    transition: filter 0.3;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
