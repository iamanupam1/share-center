"use client";
import React from "react";

const MonthlyStatComponent = () => {
  return (
    <div class="border-t border-gray-200 dark:border-gray-600">
      <div class="pt-4">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center min-w-0">
                <div class="ml-3">
                  <p class="font-medium text-gray-900 truncate dark:text-white">
                    NABIL
                  </p>
                  <div class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      ></path>
                    </svg>
                    2.5%
                    <span class="ml-2 text-gray-500">vs last month</span>
                  </div>
                </div>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $445,467
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center min-w-0">
                <div class="ml-3">
                  <p class="font-medium text-gray-900 truncate dark:text-white">
                    ADBL
                  </p>
                  <div class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      ></path>
                    </svg>
                    12.5%
                    <span class="ml-2 text-gray-500">vs last month</span>
                  </div>
                </div>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $256,982
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="hidden pt-4"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src="/images/users/neil-sims.png"
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3320
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src="/images/users/bonnie-green.png"
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-900 truncate dark:text-white">
                  Bonnie Green
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2467
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src="/images/users/michael-gough.png"
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-900 truncate dark:text-white">
                  Michael Gough
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2235
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src="/images/users/thomas-lean.png"
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-900 truncate dark:text-white">
                  Thomes Lean
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $1842
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src="/images/users/lana-byrd.png"
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-900 truncate dark:text-white">
                  Lana Byrd
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $1044
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MonthlyStatComponent;
