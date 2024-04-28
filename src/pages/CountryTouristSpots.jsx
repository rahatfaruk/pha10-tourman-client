import { useLoaderData, useParams } from "react-router-dom";
import TouristsSpotsGrid from "../comps/TouristsSpotsGrid";

function CountryTouristSpots() {
  const spots = useLoaderData()
  const {countryName} = useParams()

  return (  
    <section className="px-4">
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