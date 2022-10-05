import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Nav from "../components/Nav";


const Main = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ChartList = styled.div`
    display: flex ;
    flex-direction: column;
`;

const Home = (): JSX.Element => {

    return (
        <Main>
            <Header />
            <h1>Home</h1>
            <Nav />
        </Main>
    )
}

export default Home;