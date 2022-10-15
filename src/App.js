import React from 'react'
import GlobalStyle from './components/GlobalStyle';
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from "./pages/Home";
import Search from './pages/Search';
import Setting from "./pages/Setting";
import Player from "./pages/Player";

const RootDiv = styled.div`
  background-color: #FFF;
  height: 100vh;
  overflow: hidden;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RootDiv>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/search' element={<Search />} />
            <Route path='/player' element={<Player />} />
          </Routes>
        </Router>
      </RootDiv>
    </>
  )
}
