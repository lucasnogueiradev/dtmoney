import styled from "styled-components";

export const ContainerHeader = styled.header`
  background: var(--blue);
  transition: 0.3s;
  @media (max-width: 800px) {
    height: 5rem;
  }
`;

export const ContentHeader = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.7rem 2rem 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  @media (max-width: 800px) {
    img {
      margin-top: -76px;
      margin-left: -10px;
      margin-right: 10px;
    }
    button[type="button"] {
      margin-top: 4.1rem;
      border-color: 2px green solid;
    }
  }

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.24rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
