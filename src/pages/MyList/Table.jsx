function Table({spots}) {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm md:text-base text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs md:text-base text-gray-700 uppercase bg-purple-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Spot Name</th>
            <th scope="col" class="px-6 py-3">Country</th>
            <th scope="col" class="px-6 py-3">Avg Cost</th>
            <th scope="col" class="px-6 py-3">Seasonality</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {spots.map(spot => (
            <tr key={spot._id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-purple-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{spot.touristsSpotName}</th>
              <td class="px-6 py-4">{spot.countryName}</td>
              <td class="px-6 py-4">{spot.averageCost} USD</td>
              <td class="px-6 py-4">{spot.seasonality} </td>
              <td class="px-6 py-4 space-x-6">
                <button type="submit" className="bg-purple-600 text-white px-4 py-1 rounded-md hover:opacity-90">Update</button>
                <button type="submit" className="bg-purple-600 text-white px-4 py-1 rounded-md hover:opacity-90">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Table