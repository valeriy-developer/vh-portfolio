"use client";

import { useModal } from "@/providers/ModalsProvider";
import SubmitModal from "./SubmitModal";

const modalsMap = {
  submit: SubmitModal,
} as const;

const ModalRoot = ({ onExited }: { onExited: () => void }) => {
  const { modalType, modalProps, closeModal } = useModal();

  if (!modalType) return null;

  const ActiveModal = modalsMap[modalType];

  if (!ActiveModal) return null;

  return (
    <ActiveModal
      open={modalProps.open ?? true}
      onClose={closeModal}
      onExited={onExited}
      {...modalProps}
    />
  );
};

export default ModalRoot;
