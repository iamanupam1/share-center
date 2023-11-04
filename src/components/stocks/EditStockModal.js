import React from "react";
import FormModal from "../common/modal/FormModal";
import AddEditStockComponent from "./AddEditStockComponent";

const EditStockModal = ({
  modalOpen = undefined,
  setModalOpen,
  latestStockAbbreviation,
  selectedData,
}) => {
  return (
    <FormModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <AddEditStockComponent
        headerText="Edit"
        latestStockAbbreviation={latestStockAbbreviation}
        selectedSymbol={selectedData["symbol"]}
        selectedQuantity={selectedData["quantity"]}
      />
    </FormModal>
  );
};

export default EditStockModal;
