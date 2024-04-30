import { GeoFill, GlobeAsiaAustralia, People, PeopleFill } from "react-bootstrap-icons";

function Stats() {
  const statsArr = [
      {value: '30+', title: 'Total Spots', icon: <GeoFill/>} , 
      {value: '6', title: 'Total Countries', icon: <GlobeAsiaAustralia/>}, 
      {value: '10', title: 'Total tourists', icon:  <People/>}, 
      {value: '3', title: 'Tour Groups', icon:  <PeopleFill/>}, 
  ] 

  return (  
    <section className="px-4 bg-gray-200 dark:bg-gray-700">
      <div className="max-w-screen-xl mx-auto py-8">
        <div className="mb-4 md:mb-8 max-w-md mx-auto text-center">
          <h2 className="mb-3 text-3xl md:text-4xl text-center font-semibold dark:text-white">Stats</h2>
          <p className="md:text-lg dark:text-gray-400">Discover who's exploring & what's trending. Explore our visitor stats! Get inspired for your next adventure!</p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {statsArr.map((stat) => (
            <li key={stat.title} className="border px-10 py-6 bg-white text-center rounded-md">
              <p className="text-gray-500 mx-auto p-2 rounded-full text-3xl bg-purple-200 inline-block">{stat.icon}</p>
              <h3 className="text-4xl font-semibold mt-1 mb-2 text-purple-600">{stat.value}</h3>
              <p className="text-gray-500">{stat.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Stats;