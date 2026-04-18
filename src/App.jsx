import React from "react"
import LandingPage from "./components/LandingPage"
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      {/* <Dashboard /> */}
    </>
  )
}

export default App
