import ChartComponent from "./ChartComponent";

const LandingPage = ({ latestStockList, latestStockAbbreviation }) => {
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
                $45,385
              </span>
              <h3 className="text-base font-light text-gray-500 dark:text-gray-400">
                Sales this week
              </h3>
            </div>
            <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
              12.5%
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
          <ChartComponent />
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
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select tab
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option>Statistics</option>
              <option>Services</option>
              <option>FAQ</option>
            </select>
          </div>
          <ul
            className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li className="w-full">
              <button
                id="faq-tab"
                data-tabs-target="#faq"
                type="button"
                role="tab"
                aria-controls="faq"
                aria-selected="true"
                className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Top products
              </button>
            </li>
            <li className="w-full">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="false"
                className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Top Customers
              </button>
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            className="border-t border-gray-200 dark:border-gray-600"
          >
            <div
              className="hidden pt-4"
              id="faq"
              role="tabpanel"
              aria-labelledby="faq-tab"
            >
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img
                        className="flex-shrink-0 w-10 h-10"
                        src="/images/products/iphone.png"
                        alt="imac image"
                      />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          iPhone 14 Pro
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
                            />
                          </svg>
                          2.5%
                          <span className="ml-2 text-gray-500">
                            vs last month
                          </span>
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
                      <img
                        className="flex-shrink-0 w-10 h-10"
                        src="/images/products/imac.png"
                        alt="imac image"
                      />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          Apple iMac 27"
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
                            />
                          </svg>
                          12.5%
                          <span className="ml-2 text-gray-500">
                            vs last month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $256,982
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img
                        className="flex-shrink-0 w-10 h-10"
                        src="/images/products/watch.png"
                        alt="watch image"
                      />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          Apple Watch SE
                        </p>
                        <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
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
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            />
                          </svg>
                          1.35%
                          <span className="ml-2 text-gray-500">
                            vs last month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $201,869
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img
                        className="flex-shrink-0 w-10 h-10"
                        src="/images/products/ipad.png"
                        alt="ipad image"
                      />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          Apple iPad Air
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
                            />
                          </svg>
                          12.5%
                          <span className="ml-2 text-gray-500">
                            vs last month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $103,967
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img
                        className="flex-shrink-0 w-10 h-10"
                        src="/images/products/imac.png"
                        alt="imac image"
                      />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          Apple iMac 24"
                        </p>
                        <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
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
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            />
                          </svg>
                          2%
                          <span className="ml-2 text-gray-500">
                            vs last month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $98,543
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="hidden pt-4"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/images/users/neil-sims.png"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $3320
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/images/users/bonnie-green.png"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Bonnie Green
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2467
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/images/users/michael-gough.png"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Michael Gough
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2235
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/images/users/thomas-lean.png"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Thomes Lean
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $1842
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/images/users/lana-byrd.png"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Lana Byrd
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $1044
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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

export default LandingPage;
