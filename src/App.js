import React from 'react'
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./pages/Home";
import Setting from "./pages/Setting";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </Router>
  )
}
