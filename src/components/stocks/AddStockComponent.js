"use client";
import axios from "axios";
import React, { useState, useTransition } from "react";
import Select from "react-select";
import Loader from "../common/Loader";
import { useRouter } from "next/navigation";

const AddStockComponent = ({ latestStockAbbreviation }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [shareQuantity, setShareQuantity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const addShareOptions = latestStockAbbreviation.map((options) => {
    return {
      label: options.fullName,
      value: options.abbrev,
    };
  });
  const resetFields = () => {
    setSelectedValue("");
    setShareQuantity("");
  };
  const handleAddStockClick = async () => {
    setError("");
    setIsLoading(true);
    setIsFetching(true);
    if (!selectedValue || !shareQuantity) {
      setError("All fields are necessary");
      setIsLoading(false);
      return;
    }
    try {
      const resp = await axios.post("/api/v1/user/stock", {
        symbol: selectedValue["value"],
        quantity: shareQuantity,
      });
      if (resp.data) {
        resetFields();
        setIsLoading(false);
      }
      return null;
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
    setIsLoading(false);
    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Add Share
      </h3>
      <Select
        options={addShareOptions}
        isClearable
        value={selectedValue}
        id="long-value-select"
        instanceId="long-value-select"
        onChange={(value) => setSelectedValue(value)}
        disabled={isPending}
      />
      <input
        value={shareQuantity}
        disabled={isPending}
        type="number"
        className={`p-2 my-4 w-full border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        onChange={(e) => setShareQuantity(e.target.value)}
        placeholder="Enter share quantity"
      />
      {error && (
        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
          {error}
        </div>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        onClick={handleAddStockClick}
      >
        {isLoading ? <Loader /> : "Add Now"}
      </button>
    </div>
  );
};

export default AddStockComponent;
