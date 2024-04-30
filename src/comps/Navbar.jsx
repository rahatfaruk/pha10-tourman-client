import { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { toast } from "react-toastify"
import { Tooltip } from 'react-tooltip'
import { List, MoonFill, MoonStarsFill, SunFill } from "react-bootstrap-icons"
// context
import { AuthContext } from "../context/AuthProvider"
import { ThemeContext } from "../context/ThemeProvider"

const navLinks = [
  {id: 1, text: 'Home', path: '/'},
  {id: 2, text: 'All Tourists Spot', path: '/all-tourists-spot'},
  {id: 3, text: 'Add Tourists Spot', path: '/add-tourists-spot'},
  {id: 4, text: 'My List', path: '/my-list'},
]

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const {user, logout} = useContext(AuthContext)
  const {isDark, setIsDark} = useContext(ThemeContext)

  const handleLogout = () => {
    logout()
    .then(() => toast.info('logged out') )
    .catch(err => toast.error(err.message))
  } 

  return (
    <nav className="px-4 dark:bg-gray-800">
      <div className="max-w-screen-xl py-4 mx-auto border-b grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4">
        <h1 className='text-2xl'><Link to={'/'} className="text-purple-600 font-bold">TourMan</Link></h1>

        {/* Theme toggler -- profile photo || register,login btn -- nav-toggler */}
        <div className="flex items-center justify-end md:order-1 gap-4">
          
          <button onClick={() => setIsDark(!isDark)} className="p-1 text-2xl hover:scale-95 dark:text-white"> 
           {isDark ? <MoonStarsFill/> : <SunFill/> }
          </button>

          {user ? 
            <div className="flex gap-3 items-center">
              <figure className="w-9 p-0.5 border rounded-full border-purple-500" data-tooltip-id="profile-photo">
                <img src={user.photoURL} alt="" className="w-full rounded-full shadow-md" />
              </figure>

              <Tooltip id="profile-photo" clickable className="z-50">
                <p className="mb-2 text-center text-lg">{user.displayName}</p>
                <button className="px-3 py-1 rounded-md text-white bg-red-800 hover:opacity-90" onClick={handleLogout}>Logout</button>
              </Tooltip>
            </div> 
          : 
            <div className="flex gap-3">
              <Link to='/signin' className="inline-block px-3 py-1 rounded-md text-white bg-purple-600 hover:opacity-90">Login</Link>
              <Link to='/signup' className="inline-block px-3 py-1 rounded-md text-white bg-purple-600 hover:opacity-90">Register</Link>
            </div>
          }
          
          <button className="md:hidden border p-0.5 text-2xl hover:scale-95 dark:text-white" onClick={() => setShowLinks(!showLinks)}> <List/> </button>
        </div>

        {/* links */}
        { 
          <ul className={`${showLinks ? 'block': 'hidden'} md:flex justify-center col-span-2 md:col-span-1`}>
            {navLinks.map(link => (
              <li key={link.id}>
                <NavLink to={link.path} className={({isActive}) => 
                  `block px-4 py-2 rounded-md md:bg-transparent hover:underline hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700 
                  ${isActive ? 'text-purple-600 bg-purple-100 font-bold underline dark:bg-purple-600' : ''}` 
                }>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        }
      </div>
    </nav>
  )
}