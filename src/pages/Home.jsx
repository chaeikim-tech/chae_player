import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Playlist from './Playlist';
import Player from './Player';

const Main = styled.div`
    display: flex;
    overflow: hidden;
`;

const Home = () => {



    return (
        <Main>
            <Header />
            <Playlist />
            <Player />
        </Main>
    )
}

export default Home;