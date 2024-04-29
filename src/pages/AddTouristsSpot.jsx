import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthProvider"
import { toast } from "react-toastify";

function AddTouristsSpot() {
  const [countries, setCountries] = useState([])
  const {user} = useContext(AuthContext)

  // add new spot
  const handleAddTouristsSpot = e => {
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
    const userEmail = form.email.value
    const userName = form.username.value

    const newSpot = { image, touristsSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear, userEmail, userName }

    // post newSpot to DB
    fetch('http://localhost:5000/add-spot', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify( newSpot ) 
    })
    .then(res => res.json())
    .then(data => {
      toast.success('Tourist spot added successfully!')
      form.reset()
    })
  }

  // get countries from db
  useEffect(() => {
    fetch('http://localhost:5000/home-spots')
    .then(res => res.json())
    .then(data => {
      // make countris array from data
      setCountries( data.map(item => item.countryName) )
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Add Tourists Spot</h2>

        <form onSubmit={handleAddTouristsSpot}>
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
                {countries.map(country => 
                  <option value={country} key={country}>{country}</option>)
                }
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
          <div className="md:grid grid-cols-2 gap-8">
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Your Name</span>
              <input type="text" name="username" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="Nur Islam" defaultValue={user.displayName} disabled />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 text-sm text-gray-600">Your email</span>
              <input type="email" name="email" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="example@mail.com" defaultValue={user.email} disabled />
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

export default AddTouristsSpot;