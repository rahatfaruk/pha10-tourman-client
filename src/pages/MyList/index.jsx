import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Table from "./Table";

function MyList() {
  const {user} = useContext( AuthContext )
  const [spots, setSpots] = useState([])

  // get my spots
  useEffect(() => {
    fetch(`http://localhost:5000/my-spots/${user.email}`)
    .then(res => res.json())
    .then(data => setSpots(data))
    .catch(err => console.log(err.message))
  }, [])

  return (
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8">
        <header className="mb-6 text-center font-semibold bg-purple-200 text-purple-800 p-4 rounded-md">
          <h1 className="text-3xl md:text-4xl">My List</h1>
        </header>

        <div className="text-center mb-4">
          <p className="text-lg font-semibold">{user.displayName} | {user.email}</p>
        </div>

        <Table spots={spots} setSpots={setSpots} />
      </div>
    </section>
  );
}

export default MyList;

