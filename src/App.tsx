import { useState } from "react";
import { Dashboard } from "./components/Dashboard/index.tsx";
import { Header } from "./components/Header/index.tsx";
import { GlobalStyle } from "./styles/global.ts";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal/index.tsx";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
