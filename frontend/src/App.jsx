import React from "react"
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to='/login'></Navigate>
}
 
function RegisterAndLogout() {
  localStorage.clear()
  return <Register></Register>
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path='/'
        element={
          <ProtectedRoute>
            <Home></Home>
          </ProtectedRoute>
        }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
        <Route path="/register" element={<RegisterAndLogout></RegisterAndLogout>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
