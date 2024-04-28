import { useLoaderData } from "react-router-dom";
import TouristsSpotsGrid from "./TouristsSpotsGrid";
import { useState } from "react";

function AllTouristsSpot() {
  const data = useLoaderData()
  const [spots, setSpots] = useState(data)

  const handleSortSpots = e => {
    const sortBy = e.target.value
    console.log(sortBy);

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

  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8">
        <header className="mb-6 text-center font-semibold bg-purple-200 text-purple-800 p-4 rounded-md">
          <h1 className="text-3xl md:text-4xl">All Tourists Spot</h1>
        </header>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span>Sort by:</span>
          <select name="sort" onChange={handleSortSpots} className="border min-w-0 px-4 py-2 rounded-md bg-gray-200" defaultValue={''}>
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