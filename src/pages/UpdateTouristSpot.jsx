import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

function UpdateTouristSpot() {
  const [countries, setCountries] = useState([])
  const [spot, setSpot] = useState({})
  const {id} = useParams()

  const { image, touristsSpotName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear } = spot
  console.log(spot);

  const handleUpdateTouristsSpot = e => {
    e.preventDefault() 
    const form = e.target
    const image = form.image.value
    const touristsSpotName = form.spot.value
    const countryName = form.country.value
    const location = form.location.value
    const shortDescription = form.description.value
    const averageCost = +form.cost.value
    const seasonality = form.seasonality.value
    const travelTime = form.time.value
    const totalVisitorsPerYear = +form.visitors.value

    const newSpot = { image, touristsSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear }

    // send update request to DB
    fetch(`https://pha10-tourman-jxzltace2-rahatfaruk99.vercel.app/update-spot/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify( newSpot )
    })
    .then(res => res.json())
    .then(data => {
      toast.success('Spot Updated Successfully!')
    })
    .catch(err => {
      toast.error('Spot Update Failed!')
      console.log(err.message);
    })
  }

  // get spot details
  useEffect(() => {
    fetch(`https://pha10-tourman-jxzltace2-rahatfaruk99.vercel.app/spot-details/${id}`)
    .then(res => res.json())
    .then(data => setSpot(data))
    .catch(error => console.log(error.message))
  }, [])

  // get countries from db
  useEffect(() => {
    fetch('https://pha10-tourman-jxzltace2-rahatfaruk99.vercel.app/home-spots')
    .then(res => res.json())
    .then(data => {
      // make countris array from data
      setCountries( data.map(item => item.countryName) )
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <section className="px-4 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto py-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Update Tourists Spot</h2>

        <form onSubmit={handleUpdateTouristsSpot}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Image url</span>
            <input type="text" name="image" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" placeholder="https://image.jpg" defaultValue={image} />
          </label>
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Spot name</span>
              <input type="text" name="spot" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" placeholder="Sundarban" defaultValue={touristsSpotName} />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Country name</span>
              <select name="country" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" defaultValue={'thailand'}>
                {countries.map(country => 
                  <option value={country} key={country}>{country}</option>)
                }
              </select>
            </label>
          </div>
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Location</span>
              <input type="text" name="location" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" placeholder="Southern Bangladesh" defaultValue={location} />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Short description</span>
              <input type="text" name="description" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" placeholder="This place is very nice..." defaultValue={shortDescription} />
            </label>
          </div>
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Average cost (usd)</span>
              <input type="text" name="cost" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" placeholder="500" defaultValue={averageCost} />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Seasonality</span>
              <input type="text" name="seasonality" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" placeholder="e.g. summer, winter" defaultValue={seasonality} />
            </label>
          </div>
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Travel time</span>
              <input type="text" name="time" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" placeholder="7 days" defaultValue={travelTime} />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Total Visitors (Per Year)</span>
              <input type="text" name="visitors" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-800" placeholder="1000" defaultValue={totalVisitorsPerYear} />
            </label>
          </div>

          <div className="mt-6">
            <button type="submit" className="bg-purple-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Update</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateTouristSpot;