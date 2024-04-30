import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import 'animate.css'
// context
import AuthProvider from './context/AuthProvider'
// comps & pages
import RouteGuard from './comps/RouteGuard.jsx'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import AddTouristsSpot from './pages/AddTouristsSpot.jsx'
import SpotDetails from './pages/SpotDetails'
import AllTouristsSpot from './pages/AllTouristsSpot'
import MyList from './pages/MyList'
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
      />
      <Route 
        path='add-tourists-spot'
        element={ <RouteGuard> <AddTouristsSpot/> </RouteGuard> }
      />
      <Route 
        path='all-tourists-spot'
        element={ <AllTouristsSpot/> }
      />
      <Route 
        path='my-list'
        element={ <RouteGuard> <MyList/> </RouteGuard> }
      />
      <Route 
        path='spot-details/:id'
        element={ <RouteGuard> <SpotDetails/> </RouteGuard> }
      />
      <Route 
        path='update-tourist-spot/:id'
        element={ <RouteGuard> <UpdateTouristSpot/> </RouteGuard> }
      />
      <Route 
        path='country-spots/:countryName'
        element={ <CountryTouristSpots/> }
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
