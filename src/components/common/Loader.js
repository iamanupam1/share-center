"use client";

import { Spinner } from "flowbite-react";
const Loader = ({ size = "sm", color = "info", hideText = false }) => {
  return (
    <div className="flex items-baseline space-x-2 justify-center">
      <Spinner aria-label="Default status example" color={color} size={size} />
      {!hideText && (
        <span className="text-xs font-medium text-white-500">Loading...</span>
      )}
    </div>
  );
};

export default Loader;
