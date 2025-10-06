"use client";

import ModalRoot from "@/components/modals/ModalRoot";
import { useLenis } from "lenis/react";
import { createContext, useContext, useState, ReactNode } from "react";

type ModalType = "submit";

interface ModalContextType {
  openModal: (type: ModalType, props?: Record<string, any>) => void;
  closeModal: () => void;
  modalType: ModalType | null;
  modalProps: Record<string, any>;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const [modalProps, setModalProps] = useState<Record<string, any>>({});
  const lenis = useLenis();

  const openModal = (type: ModalType, props?: Record<string, any>) => {
    setModalType(type);
    if (props) setModalProps(props);
    lenis?.stop();
  };

  const closeModal = () => {
    setModalProps((prev) => ({ ...prev, open: false }));
    lenis?.start();
  };

  const handleExited = () => {
    setModalType(null);
    setModalProps({});
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, modalType, modalProps }}
    >
      {children}
      <ModalRoot onExited={handleExited} />
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("useModal must be used within ModalProvider");

  return context;
};
