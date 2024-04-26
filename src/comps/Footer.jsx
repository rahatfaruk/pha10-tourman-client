import { Envelope, Facebook, Instagram, Telephone, Twitter } from "react-bootstrap-icons";

function Footer() {
  return (  
    <footer className=" bg-gray-200 border-t px-4">
      <div className="max-w-md text-center py-6 mx-auto">
        <h2 className="mb-4 text-3xl md:text-4xl text-center font-semibold text-purple-600">TourMan</h2>
        <p className="text-gray-700 mb-4">Tour is peaceful and works as mind freshner for everyone! Stay connected with us to know more tour places!</p>
        
        <div className="space-x-4 text-gray-700 border bg-purple-200 p-3 rounded-md">
          <p className="flex justify-center items-center gap-2 mb-1"><Envelope /> tourman@mail.com</p>
          <p className="flex justify-center items-center gap-2"><Telephone /> 01882244553</p>
        </div>

        <ul className="flex gap-4 justify-center my-4">
          <li><a href="#" className="inline-block p-1 border border-gray-600 rounded-full text-2xl hover:opacity-75"> <Facebook /> </a></li>
          <li><a href="#" className="inline-block p-1 border border-gray-600 rounded-full text-2xl hover:opacity-75"> <Twitter /> </a></li>
          <li><a href="#" className="inline-block p-1 border border-gray-600 rounded-full text-2xl hover:opacity-75"> <Instagram /> </a></li>
          <li><a href="#" className="inline-block p-1 border border-gray-600 rounded-full text-2xl hover:opacity-75"> <Envelope /> </a></li>
        </ul>
        <p className="">TourMan &copy;2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;