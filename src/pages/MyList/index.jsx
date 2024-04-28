import { useLoaderData } from "react-router-dom";
import Table from "./Table";

function MyList() {
  const spots = useLoaderData()

  return (
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8">
        <header className="mb-6 text-center font-semibold bg-purple-200 text-purple-800 p-4 rounded-md">
          <h1 className="text-3xl md:text-4xl">My List</h1>
        </header>

        <div className="text-center mb-4">
          <p className="text-lg font-semibold">Ali | user@mail.com</p>
        </div>

        <Table spots={spots} />
      </div>
    </section>
  );
}

export default MyList;

