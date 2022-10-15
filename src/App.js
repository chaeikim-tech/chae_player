import React from 'react'
import GlobalStyle from './components/GlobalStyle';
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./pages/Home";

const RootDiv = styled.div`
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
          </Routes>
        </Router>
      </RootDiv>
    </>
  )
}
