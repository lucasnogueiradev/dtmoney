import { ContainerHeader, ContentHeader } from "./styles.header";
import logo from "../../assets/logo.svg";
import React from "react";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenModal}>
          Nova transação
        </button>
      </ContentHeader>
    </ContainerHeader>
  );
}
