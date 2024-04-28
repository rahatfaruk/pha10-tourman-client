import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Countries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('/countries.json')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err.message))
  }, [])
  
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8">
        <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl text-center font-semibold">Countries</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {countries.map(country => <Country key={country._id} country={country} />)}
        </div>
      </div>
    </section>
  );
}
export default Countries;


function Country({ country }) {
  const { image, countryName, description } = country
  return (
    <div className="relative border shadow-sm rounded-xl">
      <img className="w-full h-64 rounded-xl object-cover object-bottom" src={image} alt={countryName} />
      <Link to={`/tourist-spots/${countryName}`} className="absolute top-0 bottom-0 start-0 end-0 flex flex-col justify-center items-center py-4 px-6 text-center text-white bg-[rgba(0,0,0,.55)] rounded-xl hover:cursor-pointer">
        <h3 className="mb-2 text-2xl font-bold">{countryName}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}