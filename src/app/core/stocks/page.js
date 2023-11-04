import { getStockAbbreviation } from "@/actions/stock/stockAbbrevation";
import { getUserStocksLatestValuation } from "@/actions/stock/userStock";
import Layout from "@/components/common/Layout";
import StockListComponent from "@/components/core/StockListComponent";
import AddEditStockComponent from "@/components/stocks/AddEditStockComponent";
import AddStockComponent from "@/components/stocks/AddEditStockComponent";
import React from "react";

async function StockPage() {
  const userStocks = await getUserStocksLatestValuation();
  const latestStockAbbreviation = await getStockAbbreviation();
  return (
    <Layout>
      <div
        className={`grid gap-4 xl:grid-cols-2 2xl:grid-cols-${
          userStocks.length ? "3" : "1"
        } mb-5`}
      >
        {/* Main widget */}
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Your Share Listings
          </h3>
          <div className="pt-4">
            <StockListComponent
              latestStockAbbreviation={JSON.parse(
                JSON.stringify(latestStockAbbreviation)
              )}
              userStocks={JSON.parse(JSON.stringify(userStocks))}
            />
          </div>
        </div>
        {/*Tabs widget */}
        <AddEditStockComponent
          latestStockAbbreviation={JSON.parse(
            JSON.stringify(latestStockAbbreviation)
          )}
        />
      </div>
    </Layout>
  );
}

export default StockPage;
