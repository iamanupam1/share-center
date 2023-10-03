function Home() {
  return (
    <div className="flex justify-center">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3" key="name">
                Product name
              </th>
              <th scope="col" class="px-6 py-3" key="color">
                Color
              </th>
              <th scope="col" class="px-6 py-3" key="category">
                Category
              </th>
              <th scope="col" class="px-6 py-3" key="price">
                Price
              </th>
              <th scope="col" class="px-6 py-3" key="edit">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                key="a"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4" key="b">
                Silver
              </td>
              <td class="px-6 py-4" key="c">
                Laptop
              </td>
              <td class="px-6 py-4" key="d">
                $2999
              </td>
              <td class="px-6 py-4 text-right" key="e">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
