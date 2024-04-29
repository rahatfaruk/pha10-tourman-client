import { useEffect, useState } from "react";
import { Clock, Clouds, CurrencyDollar, GeoAlt, People } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

function SpotDetails() {
  const [spot, setSpot] = useState({})
  const {id} = useParams()
  
  const { _id, image, touristsSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear, userName, userEmail } = spot
  
  const statsArr = [[averageCost, 'Average Cost', <CurrencyDollar/>] , [seasonality, 'Seasonality', <Clouds/>], [travelTime, 'Travel Time',  <Clock/>], [totalVisitorsPerYear, 'Total Visitors Per Year', <People/>]] 

  useEffect(() => {
    fetch(`http://localhost:5000/spot-details/${id}`)
    .then(res => res.json())
    .then(data => setSpot(data))
    .catch(error => console.log(error.message))
  }, [])

  return (
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto pt-6 pb-12">
        <header className="mb-6 text-center font-semibold bg-purple-200 text-purple-800 p-4 rounded-md">
          <h1 className="text-3xl md:text-4xl">Spot Details</h1>
        </header>
        <p className="text-sm md:text-lg mb-2 text-gray-500">ID: {_id} </p>
        <figure className="mb-6">
          <img src={image} alt="" className='w-full h-96 md:h-[600px]  object-cover rounded-lg object-bottom' />
        </figure>
        <p className='flex items-center gap-2 text-purple-600 text-lg'><GeoAlt /> {location}, {countryName}</p>
        <h2 className="mb-2 text-3xl md:text-4xl font-semibold">{touristsSpotName}</h2>
        <p className='text-gray-600 text-sm mb-6'>Added by <span className='font-bold'>{userName}</span> | {userEmail}</p>

        <h3 className="text-2xl font-semibold mb-1">Details</h3>
        <p className="text-lg text-gray-500 mb-4">{shortDescription}</p>
        {/* Todo: stats */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsArr.map((stat) => (
            <li key={stat[1]} className="border px-10 py-6 bg-gray-100 text-center rounded-md">
              <p className="text-gray-500 mx-auto p-2 rounded-full text-3xl bg-purple-200 inline-block">{stat[2]}</p>
              <h3 className="text-4xl font-semibold mt-1 mb-2 text-purple-600">{stat[0]}</h3>
              <p className="text-gray-500">{stat[1]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SpotDetails;