"use client";
import React, { useState } from "react";
import HeroIcon from "../common/HeroIcon";
import PopupModal from "../common/modal/PopupModal";
import EditStockModal from "../stocks/EditStockModal";
import axios from "axios";

const StockListComponent = ({ userStocks, latestStockAbbreviation }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(undefined);
  const [editModalOpen, setEditModalOpen] = useState(undefined);
  const [activeStockSelection, setActiveStockSelection] = useState(undefined);

  const handleStockDelete = async () => {
    if (!activeStockSelection) return;
    try {
      await axios.delete(`/api/v1/user/stock/${activeStockSelection}`);
      setDeleteModalOpen(undefined);
    } catch (error) {
      console.log(error);
    }
    return;
  };
  return (
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
      {userStocks?.map((stock) => {
        return (
          <li className="py-3 sm:py-4" key={stock._id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center min-w-0">
                <div className="ml-3">
                  <p className="font-medium text-gray-900 truncate dark:text-white">
                    {stock.symbol}
                  </p>
                  <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      ></path>
                    </svg>
                    {stock.quantity}
                    <span className="ml-2 text-gray-500">vs last day</span>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                NPR {stock.latestValuation || "N/A"}
              </div>
            </div>
            <div className="inline-flex shadow-sm mt-3" role="group">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                onClick={() => {
                  setEditModalOpen("form-modal");
                  setActiveStockSelection(stock.guid);
                }}
              >
                <HeroIcon name={"PencilSquareIcon"} className="h-4 w-4" />
                Edit
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-500 bg-white border border-gray-200   hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                onClick={() => {
                  setDeleteModalOpen("pop-up");
                  setActiveStockSelection(stock.guid);
                }}
              >
                <HeroIcon name={"TrashIcon"} className="h-4 w-4 text-red-500" />
                Delete
              </button>
            </div>
          </li>
        );
      })}
      <PopupModal
        handleSubmit={() => handleStockDelete()}
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
        modalText="Are you sure you want to delete this stock?"
        iconName="TrashIcon"
      />
      <EditStockModal
        handleSubmit={() => handleStockEdit()}
        modalOpen={editModalOpen}
        setModalOpen={setEditModalOpen}
        modalText="Edit Selected Stock"
        latestStockAbbreviation={latestStockAbbreviation}
        selectedData={
          userStocks.find((item) => item.guid === activeStockSelection) || {}
        }
      />
    </ul>
  );
};

export default StockListComponent;
