import {
  ContainerSummary,
  ContentSummary,
  HeaderSummary,
  TitleSummary,
  StrongSummary,
  ImgSummary,
} from "./styles.summary";

import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import totalImg from "../../assets/total.svg";
import React, { useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";
interface Title {
  Entradas: "Entradas";
  Saidas: "Saídas";
  total: "Total";
}

export function Summary(props: Title) {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <ContainerSummary>
      <ContentSummary>
        <HeaderSummary>
          <TitleSummary>{props.Entradas}</TitleSummary>
          <ImgSummary src={incomeImg} alt="Entradas" />
        </HeaderSummary>
        <StrongSummary>R${summary.deposits}</StrongSummary>
      </ContentSummary>

      <ContentSummary>
        <HeaderSummary>
          <TitleSummary>{props.Saidas}</TitleSummary>
          <ImgSummary src={outcomeImg} alt="Entradas" />
        </HeaderSummary>
        <StrongSummary color="#b80909">-R${summary.withdraws}</StrongSummary>
      </ContentSummary>

      <ContentSummary className="total">
        <HeaderSummary>
          <TitleSummary>{props.total}</TitleSummary>
          <ImgSummary src={totalImg} alt="saidas" />
        </HeaderSummary>
        <StrongSummary>R${summary.total}</StrongSummary>
      </ContentSummary>
    </ContainerSummary>
  );
}
