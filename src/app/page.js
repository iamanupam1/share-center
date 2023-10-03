import { getStockAbbrevation } from "@/actions/stock/stockAbbrevation";

async function Home() {
  const stockAbbrevationList = await getStockAbbrevation()
  return (
    <div className="flex justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3" key="_fullName">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3" key="_abbrev">
                Abbrevation
              </th>
              <th scope="col" className="px-6 py-3" key="_vCount">
                V Count
              </th>
            </tr>
          </thead>
          <tbody>
            {stockAbbrevationList?.map((stock) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={stock._id}
                >
                  <td className="px-6 py-4">{stock.fullName}</td>
                  <td className="px-6 py-4">{stock.abbrev}</td>
                  <td className="px-6 py-4">{stock.vCount}</td>
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
