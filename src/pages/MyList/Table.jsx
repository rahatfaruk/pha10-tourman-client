import { Link } from "react-router-dom"
import Swal from "sweetalert2";

function Table({spots}) {
  const handleDelete = id => {
    console.log(id);
    // show confirm dialog before delete
    Swal.fire({
      title: "Are you sure?",
      text: "This Spot will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9333EA",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // <<Send delete request here>>

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm md:text-base text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs md:text-base text-gray-700 uppercase bg-purple-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Spot Name</th>
            <th scope="col" className="px-6 py-3">Country</th>
            <th scope="col" className="px-6 py-3">Avg Cost</th>
            <th scope="col" className="px-6 py-3">Seasonality</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {spots.map(spot => (
            <tr key={spot._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-purple-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{spot.touristsSpotName}</th>
              <td className="px-6 py-4">{spot.countryName}</td>
              <td className="px-6 py-4">{spot.averageCost} USD</td>
              <td className="px-6 py-4">{spot.seasonality} </td>
              <td className="px-6 py-4 space-x-6">
                <Link to={`/update-tourist-spot/${spot._id}`} className="bg-purple-600 text-white px-4 py-1 rounded-md hover:opacity-90">Update</Link>
                <button onClick={() => handleDelete(spot._id)} className="bg-red-600 text-white px-4 py-1 rounded-md hover:opacity-90">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Table