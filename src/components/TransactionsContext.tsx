import React, { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../services/api";

interface transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: String;
  createdAt: string;
}

interface TransactionsContextData {
  transactions: transaction[];
  createTransactions: (transaction: TransactionsInput) => Promise<void>;
}

type TransactionsInput = Omit<transaction, "id" | "createdAt">;

interface TransactionProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProps) {
  const [transactions, SetTransactions] = useState<transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")

      .then((response) => SetTransactions(response.data.transactions));
  }, []);

  async function createTransactions(TransactionsInput: TransactionsInput) {
    const response = await api.post("/transactions", {
      ...TransactionsInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    SetTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
