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
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
