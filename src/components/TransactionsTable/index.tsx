import React from "react";
import { useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";

import {
  ContainerTransactions,
  TableTransactions,
  TheadTransactions,
  TrTransactions,
  ThTransactions,
  TbodyTransactions,
  TdTransactions,
} from "./styles.Transactions";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <ContainerTransactions>
      <TableTransactions>
        <TheadTransactions>
          <TrTransactions>
            <ThTransactions>Título</ThTransactions>
            <ThTransactions>Valor</ThTransactions>
            <ThTransactions>Categoria</ThTransactions>
            <ThTransactions>Data</ThTransactions>
          </TrTransactions>
        </TheadTransactions>
        <TbodyTransactions>
          {transactions.map((transaction) => (
            <TrTransactions key={transaction.id}>
              <TdTransactions className="title">
                {transaction.title}
              </TdTransactions>
              <TdTransactions className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </TdTransactions>
              <TdTransactions>{transaction.category}</TdTransactions>
              <TdTransactions>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </TdTransactions>
            </TrTransactions>
          ))}
        </TbodyTransactions>
      </TableTransactions>
    </ContainerTransactions>
  );
}
