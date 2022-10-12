import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewtransactionModal } from "./components/NewTransactionModal";
import React from "react";
import { TransactionsProvider } from "./components/TransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [ismodalopen, SetIsModalOpen] = useState(false);

  function handleOpenModal() {
    SetIsModalOpen(true);
  }

  function handleCloseModal() {
    SetIsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <NewtransactionModal
        isOpen={ismodalopen}
        OnRequestClose={handleCloseModal}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
}
