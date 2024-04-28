import { useContext } from 'react';
import {useLoaderData} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../comps/Loading';
import Banner from "./Banner";
import TouristsSpots from './TouristsSpots';
import Countries from './Countries';
import TourGuide from './TourGuide';
import Stats from './Stats';

function Home() {
  const touristSpots = useLoaderData()
  console.log(touristSpots);
  const {loading} = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }
  return (  
    <div>
      <Helmet>
        <title>TourMan | Home</title>
      </Helmet>
      <Banner touristSpots={touristSpots} />
      <Stats />
      <TouristsSpots touristSpots={touristSpots} />
      <TourGuide />
      <Countries />
    </div>
  );
}

export default Home;