import { getLatestStockData } from "@/actions/stock/stockTrend";

async function Home() {
  const latestStockList = await getLatestStockData();
  return (
    <div className="flex justify-center">
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
                  <td className="px-6 py-4">{stock.symbol}</td>
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
  );
}

export default Home;
