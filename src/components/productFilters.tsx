export default function ProductFilters() {
  return (
    <div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-tertiary border-2 border-secondary">

      <div className="flex items-center justify-between mt-4">
        <p className="font-medium text-secondary">Filters</p>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
          Reset Filter
        </button>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">All Type</option>
            <option value="for-rent">For Rent</option>
            <option value="for-sale">For Sale</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Furnish Type</option>
            <option value="fully-furnished">Fully Furnished</option>
            <option value="partially-furnished">Partially Furnished</option>
            <option value="not-furnished">Not Furnished</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Any Price</option>
            <option value="1000">RM 1000</option>
            <option value="2000">RM 2000</option>
            <option value="3000">RM 3000</option>
            <option value="4000">RM 4000</option>
          </select>
        </div>
      </div>
    </div>
  );
}
