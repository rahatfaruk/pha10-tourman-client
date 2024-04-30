import { useLoaderData, useParams } from "react-router-dom";
import TouristsSpotsGrid from "../comps/TouristsSpotsGrid";
import { useEffect, useState } from "react";
import Loading from "../comps/Loading";

function CountryTouristSpots() {
  const [spots, setSpots] = useState(null)
  const {countryName} = useParams()

  useEffect(() => {
    fetch(`https://pha10-tourman-jxzltace2-rahatfaruk99.vercel.app/country-spots/${countryName}`)
    .then(res => res.json())
    .then(data => setSpots(data))
    .catch(err => {
      setSpots([])
      console.log(err.message)
    })
  }, [])

  if (!spots) {
    return <Loading />
  }
  return (  
    <section className="flex-1 px-4 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto py-8">
        <header className="mb-6 text-center font-semibold bg-purple-200 text-purple-800 p-4 rounded-md">
          <h1 className="text-3xl md:text-4xl">Tourist Spots of {countryName}</h1>
        </header>

        <TouristsSpotsGrid spots={spots} />
      </div>
    </section>
  );
}

export default CountryTouristSpots;