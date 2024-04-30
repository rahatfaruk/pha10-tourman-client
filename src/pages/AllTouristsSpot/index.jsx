import { useLoaderData } from "react-router-dom";
import TouristsSpotsGrid from "../../comps/TouristsSpotsGrid";
import { useEffect, useState } from "react";

function AllTouristsSpot() {
  const [spots, setSpots] = useState([])

  const handleSortSpots = e => {
    const sortBy = e.target.value

    const newSortedSpots = [...spots].sort((spotA, spotB) => {
      // ascending
      if (sortBy === 'cost-asc') {
        return spotA.averageCost - spotB.averageCost
      }
      // descending
      else {
        return spotB.averageCost - spotA.averageCost
      }
    })

    setSpots(newSortedSpots)
  }

  // get all tourists from db
  useEffect(() => {
    fetch('http://localhost:5000/all-tourists-spot')
    .then(res => res.json())
    .then(data => {
      setSpots( data )
    })
    .catch(err => console.log(err))
  }, [])

  return (  
    <section className="px-4 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto py-8">
        <header className="mb-6 text-center font-semibold bg-purple-200 text-purple-800 p-4 rounded-md">
          <h1 className="text-3xl md:text-4xl">All Tourists Spot</h1>
        </header>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span>Sort by:</span>
          <select name="sort" onChange={handleSortSpots} className="border min-w-0 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700" defaultValue={''}>
            <option value='' disabled>Random</option>
            <option value="cost-asc">average cost (asc)</option>
            <option value="cost-desc">average cost (desc)</option>
          </select>
        </div>

        <TouristsSpotsGrid spots={spots} />
      </div>
    </section>
  );
}

export default AllTouristsSpot;