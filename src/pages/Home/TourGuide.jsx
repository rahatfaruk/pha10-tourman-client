import { toast } from "react-toastify";
import MyTypewriter from "../../comps/MyTypewriter";

function TourGuide() {
  const handleSubmit = e => {
    e.preventDefault()
    toast.success('Successfully Joined!')
  }
  return (  
    <section className="px-4 bg-gray-200">
      <div className="max-w-screen-xl py-6 md:py-12 mx-auto">
        <div className="max-w-md mx-auto text-center mb-6">
          <h2 className="mb-4 text-3xl md:text-4xl text-center font-semibold">Join Our Next <MyTypewriter words={['Tour!', 'Memories!']} /></h2>
          <p className="text-gray-500">Experience the world anew as we embark on our next unforgettable journey. Join our tour for memories that last a lifetime!</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Your Name</span>
            <input type="text" name="name" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="ali" />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600">Your email</span>
            <input type="email" name="email" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50" placeholder="example@mail.com" />
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-purple-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Join</button>
          </div>
        </form>

      </div>
    </section>
  );
}

export default TourGuide;

