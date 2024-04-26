import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import 'animate.css'
// comps & pages
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
// context
import AuthProvider from './context/AuthProvider'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='/' 
      element={<AuthProvider> <App/> </AuthProvider>} 
      errorElement={<ErrorPage /> }
    >
      <Route path='signin' element={<Signin/>} />
      <Route path='signup' element={<Signup/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
