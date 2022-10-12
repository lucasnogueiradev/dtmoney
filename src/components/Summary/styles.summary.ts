import styled from "styled-components";

export const ContainerSummary = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4rem;
  padding: 0 10rem;
  .total {
    background: var(--green);
    color: var(--shape);
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-top: 4.8rem;
    justify-content: center;
    align-self: center;
    text-align: center;

    width: 100%;
  }
`;

export const ContentSummary = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  transition: 2s;
  @media (max-width: 800px) {
    padding: 1rem 1rem;
    width: 360px;
    justify-content: center;
    align-self: center;
    text-align: center;
  }
`;

export const HeaderSummary = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleSummary = styled.p``;

export const ImgSummary = styled.img``;

export const StrongSummary = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
  transition: 0.3s;
  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;
