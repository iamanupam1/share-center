"use client";
import { Button, Modal } from "flowbite-react";
import HeroIcon from "../HeroIcon";
const PopupModal = ({
  handleSubmit,
  modalOpen = undefined,
  setModalOpen,
  modalText = "",
}) => {
  return (
    <Modal
      show={modalOpen === "pop-up"}
      size="md"
      popup
      onClose={() => setModalOpen(undefined)}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HeroIcon
            name={"ArrowRightOnRectangleIcon"}
            className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
          />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {modalText}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => handleSubmit()}>
              Yes, I'm sure
            </Button>
            <Button color="gray" onClick={() => setModalOpen(undefined)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopupModal;
