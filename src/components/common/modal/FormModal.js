"use client";
import { Modal } from "flowbite-react";

const FormModal = ({ modalOpen, setModalOpen, children }) => {
  return (
    <Modal
      show={modalOpen === "form-modal"}
      size="md"
      popup
      onClose={() => setModalOpen(undefined)}
    >
      <Modal.Header />
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default FormModal;
