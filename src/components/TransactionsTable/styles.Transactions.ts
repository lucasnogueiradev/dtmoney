import styled from "styled-components";

export const ContainerTransactions = styled.section`
  margin-top: 4rem;
  width: 100%;

  margin-bottom: 4rem;
  transition: 0.3s;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    overflow-x: scroll;
    width: 100%;
  }
`;

export const TableTransactions = styled.table`
  margin: 0 auto;
  border-spacing: 0 0.5rem;
  width: 64rem;
  transition: 0.3s;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TrTransactions = styled.tr``;
export const ThTransactions = styled.th`
  color: var(--text-body);
  font-weight: 400;
  text-align: left;
  line-height: 1.5rem;
  padding: 1rem 2rem;
  transition: 0.3s;
  @media (max-width: 800px) {
    padding: 1rem 4.5rem;
    &:nth-child(3n) {
      padding: 1rem -0rem;
    }
    padding: 1rem 4.5rem;
    &:nth-child(4n) {
      padding: 1rem 7rem;
    }
  }
`;
export const TdTransactions = styled.td`
  padding: 1rem 2rem;
  border: 0;
  background: var(--shape);
  border-radius: 0.25rem;

  &:first-child {
    font-weight: 600;
  }

  &.deposit {
    color: var(--green);
  }

  &.withdraw {
    color: var(--red);
  }
`;
export const TbodyTransactions = styled.tbody``;
export const TheadTransactions = styled.thead`
  @media (max-width: 800px) {
    display: flex;
  }
`;
