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
    fetch('http://localhost:5000/home-spots')
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