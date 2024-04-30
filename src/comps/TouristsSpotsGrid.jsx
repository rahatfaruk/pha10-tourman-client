import { Link } from "react-router-dom";

function TouristsSpotsGrid({spots}) {
  return (  
    <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
      {spots.map(spot => <Spot key={spot._id} spot={spot} />)}
    </div>
  );
}
export default TouristsSpotsGrid;


function Spot({ spot }) {
  const { _id, image, touristsSpotName, seasonality, averageCost, totalVisitorsPerYear, travelTime } = spot

  return (
    <div className="border shadow-md rounded-md md:grid grid-cols-2">
      <figure className="relative p-2 pb-3 md:p-0">
        <img src={image} className="w-full h-60 md:h-56 rounded-md md:rounded-r-none object-cover object-bottom" alt="" />
      </figure>
      <div className="px-4 pb-6 md:py-3 md:pl-8 md:self-center">
        <h3 className="text-xl font-semibold mb-1">{touristsSpotName}</h3>
        <p className='text-gray-600 text-sm mb-1 dark:text-gray-400'>Average Cost: <span className="font-semibold">{averageCost} USD</span></p>
        <p className='text-gray-600 text-sm mb-1 dark:text-gray-400'>Total Visitors (per year): <span className="font-semibold">{totalVisitorsPerYear}</span></p>
        <p className='text-gray-600 text-sm mb-1 dark:text-gray-400'>Travel Time: <span className="font-semibold">{travelTime}</span></p>
        <p className='text-gray-600 text-sm mb-1 dark:text-gray-400'>Seasonality: <span className="font-semibold">{seasonality}</span></p>
        <Link to={`/spot-details/${_id}`} className="inline-block px-3 py-1 mt-3 rounded-md text-white bg-purple-600 hover:opacity-90">View Details</Link>
      </div>
    </div>
  )
}