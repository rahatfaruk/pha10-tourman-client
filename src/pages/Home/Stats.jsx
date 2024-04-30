import { GeoFill, GlobeAsiaAustralia, People } from "react-bootstrap-icons";

function Stats() {
  const statsArr = [
      {value: '30+', title: 'Total Spots', icon: <GeoFill/>} , 
      {value: '6', title: 'Total Countries', icon: <GlobeAsiaAustralia/>}, 
      {value: '10', title: 'Total tourists', icon:  <People/>}, 
      {value: '3', title: 'Tour Groups', icon:  <People/>}, 
  ] 

  return (  
    <section className="px-4 bg-gray-200">
      <div className="max-w-screen-xl mx-auto py-8">
      <h2 className="mb-4 md:mb-8 text-3xl md:text-4xl text-center font-semibold">Stats</h2>

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