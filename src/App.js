import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/auth/Auth"
import Navbar from "./components/Navbar"
import Register from "./components/auth/Register"
import Card from "./components/Card"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Card />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App