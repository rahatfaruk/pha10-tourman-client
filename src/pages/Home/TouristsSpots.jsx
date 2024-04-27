import {GeoAlt} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function TouristsSpots({touristSpots}) {
  
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-6">
        <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl text-center font-semibold animate__animated animate__fadeInDown">Tourists Spots</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {touristSpots.map(spot => <Spot key={spot._id} spot={spot} />)}
        </div>
      </div>
    </section>
  );
}
export default TouristsSpots;


function Spot({spot}) {
    const { _id, image, touristsSpotName, countryName, userName, userEmail, averageCost, travelTime } = spot
  return (  
    <div className="border shadow-md rounded-md animate__animated animate__fadeIn">
      <figure className="relative p-2 pb-3">
        <img src={image} className="w-full h-60 rounded-md object-cover object-bottom" alt="" />
      </figure>
      <div className="px-4 pb-6">
        <h3 className="text-xl font-semibold mb-1">{touristsSpotName}</h3>
        <p className='flex items-center gap-2 mb-1'><GeoAlt /> {countryName}</p>
        <p className='text-gray-600 text-sm mb-1'>Cost: {averageCost}</p>
        <p className='text-gray-600 text-sm mb-1'>Time: {travelTime}</p>
        <p className='text-gray-600 text-sm mb-1'>Added by <span className='font-bold'>{userName}</span></p>
        <Link to={`/spot-details/${_id}`} className="inline-block px-3 py-1 mt-3 rounded-md text-white bg-purple-600 hover:opacity-90">View Details</Link>
      </div>
    </div>
  );
}