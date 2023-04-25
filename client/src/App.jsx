import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import PublicLayout from './public/PublicLayout'
import Home from './public/pages/Home'
import Login from './public/pages/Login'
import Register from './public/pages/Register'
import Appointment from './public/pages/Appointment'
import Protected from './share/components/Protected'
const App = () => {
  return <>
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="appointment"
            element={<Protected compo={<Appointment />} />} />
        </Route>

        <Route
          path='*'
          element={<>
            <h1>Page Not Found</h1>
            <Link to="/">Back Home</Link>
          </>}
        />
      </Routes>
    </ BrowserRouter>

  </>
}

export default App