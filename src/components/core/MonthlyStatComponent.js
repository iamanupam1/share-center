"use client";
import React from "react";

const MonthlyStatComponent = () => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-600">
      <div className="pt-4">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center min-w-0">
                <div className="ml-3">
                  <p className="font-medium text-gray-900 truncate dark:text-white">
                    NABIL
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
                    2.5%
                    <span className="ml-2 text-gray-500">vs last month</span>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $445,467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center min-w-0">
                <div className="ml-3">
                  <p className="font-medium text-gray-900 truncate dark:text-white">
                    ADBL
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
                    12.5%
                    <span className="ml-2 text-gray-500">vs last month</span>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $256,982
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MonthlyStatComponent;
