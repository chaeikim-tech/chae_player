import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./pages/Home";
import Search from './pages/Search';
import Setting from "./pages/Setting";
import Player from "./pages/Player";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/search' element={<Search />} />
        <Route path='/player' element={<Player />} />
      </Routes>
    </Router>
  )
}
