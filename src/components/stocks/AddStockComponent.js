"use client";
import { Dropdown } from "flowbite-react";
import React from "react";

const AddStockComponent = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Add Share
      </h3>
      <Dropdown
        dismissOnClick={false}
        label="Dropdown button"
        className="w-full"
      >
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default AddStockComponent;
