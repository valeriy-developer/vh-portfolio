"use client";

import { Modal } from "../ui/modal";

interface Props {
  open: boolean;
  onClose: () => void;
  onExited: () => void;
}

const SubmitModal = ({ open, onClose, onExited }: Props) => {
  if (open) setTimeout(() => onClose(), 4000);

  return (
    <Modal
      open={open}
      onClose={onClose}
      onExited={onExited}
      className="text-secondary font-big-shoulders text-center"
    >
      <h2 className="text-3xl font-black uppercase md:text-4xl">Thank you!</h2>
      <p className="mt-2 text-2xl font-medium md:text-3xl">
        Your message has been successfully sent. I’ll get back to you shortly.
      </p>
    </Modal>
  );
};

export default SubmitModal;
