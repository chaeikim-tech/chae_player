import React, { iseRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import Header from '../components/Header';
import Nav from "../components/Nav";
import Playlist from './Playlist';

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

const Home = () => {


    return (
        <Main>
            <Header />
            <Playlist />
            <h1>Home</h1>
        </Main>
    )
}

export default Home;