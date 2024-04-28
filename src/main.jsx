import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import 'animate.css'
// context
import AuthProvider from './context/AuthProvider'
// comps & pages
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import AddTouristsSpot from './pages/AddTouristsSpot.jsx'
import RouteGuard from './comps/RouteGuard.jsx'
import SpotDetails from './pages/SpotDetails/index.jsx'
import AllTouristsSpot from './pages/AllTouristsSpot/index.jsx'
import MyList from './pages/MyList/index.jsx'
import UpdateTouristSpot from './pages/UpdateTouristSpot.jsx'
import CountryTouristSpots from './pages/CountryTouristSpots.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='/' 
      element={<AuthProvider> <App/> </AuthProvider>} 
      errorElement={<ErrorPage /> }
    >
      <Route path='signin' element={<Signin/>} />
      <Route path='signup' element={<Signup/>} />
      <Route 
        index 
        element={<Home/>} 
        loader={() => fetch('/touristSpots.json')} 
      />
      <Route 
        path='add-tourists-spot'
        element={ <RouteGuard> <AddTouristsSpot/> </RouteGuard> }
      />
      <Route 
        path='all-tourists-spot'
        element={ <AllTouristsSpot/> }
        loader={() => fetch('/touristSpots.json')} 
      />
      <Route 
        path='my-list'
        element={ <RouteGuard> <MyList/> </RouteGuard> }
        loader={() => fetch('/touristSpots.json')} 
      />
      <Route 
        path='spot-details/:id'
        element={ <RouteGuard> <SpotDetails/> </RouteGuard> }
      />
      <Route 
        path='update-tourist-spot/:id'
        element={ <UpdateTouristSpot/> }
      />
      <Route 
        path='tourist-spots/:countryName'
        element={ <CountryTouristSpots/> }
        loader={() => fetch('/touristSpots.json')} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
