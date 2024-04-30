import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../comps/Loading';
import Banner from "./Banner";
import TouristsSpots from './TouristsSpots';
import Countries from './Countries';
import TourGuide from './TourGuide';
import Stats from './Stats';

function Home() {
  const [touristSpots, setTouristSpots] = useState(null)
  const {loading} = useContext(AuthContext)

  useEffect(() => {
    fetch('https://pha10-tourman-3cormv8e8-rahatfaruk99.vercel.app/home-spots')
    .then(res => res.json())
    .then(data => setTouristSpots(data))
    .catch(err => {
      setTouristSpots([])
      console.log(err.message)
    })
  }, [])

  if (loading || !touristSpots) {
    return <Loading />
  }
  return (  
    <div>
      <Banner touristSpots={touristSpots} />
      <Stats />
      <TouristsSpots touristSpots={touristSpots} />
      <TourGuide />
      <Countries />
    </div>
  );
}

export default Home;