import { Outlet } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./comps/Navbar";

function App() {
  return (  
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}

export default App;