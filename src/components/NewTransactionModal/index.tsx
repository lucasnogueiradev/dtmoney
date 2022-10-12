import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { Button, ButtonTransaction, Form } from "./NewModal.styles";
import CloseFvg from "../../assets/close.svg";
import EntradaImg from "../../assets/income.svg";
import SaidasImg from "../../assets/outcome.svg";

import React from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../TransactionsContext";
interface NewtransactionProps {
  isOpen: boolean;
  OnRequestClose: () => void;
}

export function NewtransactionModal({
  isOpen,
  OnRequestClose,
}: NewtransactionProps) {
  const { createTransactions } = useContext(TransactionsContext);
  const [type, SetType] = useState("");
  const [title, SetTitle] = useState("");
  const [amount, SetAmount] = useState(Number);
  const [category, SetCategory] = useState("");

  async function handleCreateNewTrasaction(event: FormEvent) {
    event.preventDefault();
    await createTransactions({
      title,
      amount,
      type,
      category,
    });

    SetTitle("");
    SetAmount(Number);
    SetType("deposit");
    SetCategory("");
    OnRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={OnRequestClose}
      className="modal-content"
      overlayClassName="react-modal"
    >
      <button type="button" onClick={OnRequestClose}>
        <img src={CloseFvg} alt="fechar modal" />
      </button>
      <Form onSubmit={handleCreateNewTrasaction}>
        <h2>Cadastro</h2>

        <input
          placeholder="Título"
          type="text"
          value={title}
          onChange={(event) => SetTitle(event.target.value)}
        />
        <input
          placeholder="valor"
          type="number"
          value={amount}
          onChange={(event) => SetAmount(Number(event.target.value))}
        />
        <ButtonTransaction>
          <Button
            onClick={() => {
              SetType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="red"
          >
            <img src={EntradaImg} alt="" />
            <span> Entradas</span>
          </Button>

          <Button
            onClick={() => {
              SetType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="green"
          >
            <img src={SaidasImg} alt="" />
            <span> Sadas</span>
          </Button>
        </ButtonTransaction>

        <input
          placeholder="Categoria"
          type="text"
          value={category}
          onChange={(event) => SetCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
