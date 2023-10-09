import { getStockAbbrevation } from "@/actions/stock/stockAbbrevation";
import { getUserStocks } from "@/actions/stock/userStock";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Layout from "@/components/common/Layout";
import AddStockComponent from "@/components/stocks/AddStockComponent";
import { getServerSession } from "next-auth";
import React from "react";

async function StockPage() {
  const session = await getServerSession(options);
  const userStocks = await getUserStocks(session?.user?._id);
  const latestStockAbbreviation = await getStockAbbrevation();
  return (
    <Layout>
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 mb-5">
        {/* Main widget */}
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Your Share Listings
          </h3>
          <div class="pt-4">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {userStocks?.map((stock) => {
                return (
                  <li class="py-3 sm:py-4" key={stock._id}>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center min-w-0">
                        <div class="ml-3">
                          <p class="font-medium text-gray-900 truncate dark:text-white">
                            {stock.symbol}
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
                            {stock.quantity}
                            <span class="ml-2 text-gray-500">
                              vs last month
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        NPR 445,467
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/*Tabs widget */}
        <AddStockComponent />
      </div>
    </Layout>
  );
}

export default StockPage;
