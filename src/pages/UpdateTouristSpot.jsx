function UpdateTouristSpot() {
  const handleUpdateTouristsSpot = e => {
    e.preventDefault() 
    const form = e.target
    const image = form.image.value
    const spot = form.spot.value
    const country = form.country.value
    const location = form.location.value
    const description = form.description.value
    const cost = form.cost.value
    const seasonality = form.seasonality.value
    const time = form.time.value
    const visitors = form.visitors.value 

    const newSpot = { image, touristsSpotName:spot, countryName:country, location, shortDescription:description, averageCost:cost, seasonality, travelTime:time, totalVisitorsPerYear:visitors }

    // >> Todo: post to DB
    console.log(newSpot);
  }

  return (
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Update Tourists Spot</h2>

        <form onSubmit={handleUpdateTouristsSpot}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Image url</span>
            <input type="text" name="image" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="https://image.jpg" />
          </label>
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Spot name</span>
              <input type="text" name="spot" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="Sundarban" />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Country name</span>
              <select name="country" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" defaultValue={'thailand'}>
                <option value="bangladesh">Bangladesh</option>
                <option value="thailand">Thailand</option>
              </select>
            </label>
          </div>
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Location</span>
              <input type="text" name="location" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="Suthern Bangladesh" />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Short description</span>
              <input type="text" name="description" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="This place is very nice..." />
            </label>
          </div>
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Average cost (usd)</span>
              <input type="text" name="cost" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="500" />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Seasonality</span>
              <input type="text" name="seasonality" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="e.g. summer, winter" />
            </label>
          </div>
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Travel time</span>
              <input type="text" name="time" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="7 days" />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Total Visitors (Per Year)</span>
              <input type="text" name="visitors" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="1000" />
            </label>
          </div>

          <div className="mt-6">
            <button type="submit" className="bg-purple-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Add</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateTouristSpot;