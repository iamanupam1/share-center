import ChartComponent from "./ChartComponent";
import MonthlyStatComponent from "./MonthlyStatComponent";
import { getUserStocks } from "@/actions/stock/userStock";

const LandingPageComponent = async ({ latestStockList, latestStockAbbreviation }) => {
  const chartComponentData = await getUserStocks();
  const getFullName = (abbrev) => {
    return (
      latestStockAbbreviation.find((item) => item.abbrev === abbrev)
        ?.fullName || ""
    );
  };
  return (
    <div>
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 mb-5">
        {/* Main widget */}
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">
                {chartComponentData.length ? "NPR 5,385" : "N/A"}
              </span>
              <h3 className="text-base font-light text-gray-500 dark:text-gray-400">
                Last Day
              </h3>
            </div>
            <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
              {chartComponentData.length ? "12.5%" : "N/A"}
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <ChartComponent
            chartComponentData={JSON.parse(JSON.stringify(chartComponentData))}
          />
        </div>
        {/*Tabs widget */}
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Statistics this month
            <button
              data-popover-target="popover-description"
              data-popover-placement="bottom-end"
              type="button"
            >
              <svg
                className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Show information</span>
            </button>
          </h3>
          <div
            data-popover=""
            id="popover-description"
            role="tooltip"
            className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
          >
            <div className="p-3 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Statistics
              </h3>
              <p>
                Statistics is a branch of applied mathematics that involves the
                collection, description, analysis, and inference of conclusions
                from quantitative data.
              </p>
              <a
                href="#"
                className="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700"
              >
                Read more{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div data-popper-arrow="" />
          </div>
          <MonthlyStatComponent />
        </div>
      </div>
      {/* Latest Market Summary */}
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h2>
          Latest Market Summary<span className="text-teal-600">.</span>
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3" key="Symbol">
                  Symbol
                </th>
                <th scope="col" className="px-6 py-3" key="LTP">
                  LTP
                </th>
                <th scope="col" className="px-6 py-3" key="Change">
                  % Change
                </th>
                <th scope="col" className="px-6 py-3" key="scope">
                  Open
                </th>
                <th scope="col" className="px-6 py-3" key="High">
                  High
                </th>
                <th scope="col" className="px-6 py-3" key="Low">
                  Low
                </th>
                <th scope="col" className="px-6 py-3" key="Quantity">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3" key="Previous">
                  Previous Close
                </th>
                <th scope="col" className="px-6 py-3" key="Difference">
                  Difference
                </th>
              </tr>
            </thead>
            <tbody>
              {latestStockList?.map((stock) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={stock._id}
                  >
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        data-te-toggle="tooltip"
                        title={getFullName(stock.symbol)}
                      >
                        {stock.symbol}
                      </a>
                    </td>
                    <td className="px-6 py-4">{stock.ltp}</td>
                    <td className="px-6 py-4">{stock.change}</td>
                    <td className="px-6 py-4">{stock.open}</td>
                    <td className="px-6 py-4">{stock.high}</td>
                    <td className="px-6 py-4">{stock.low}</td>
                    <td className="px-6 py-4">{stock.quantity}</td>
                    <td className="px-6 py-4">{stock.previousClose}</td>
                    <td className="px-6 py-4">{stock.difference}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LandingPageComponent;
