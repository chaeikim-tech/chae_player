import React, { iseRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import Header from '../components/Header';
import Nav from "../components/Nav";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin:0;
    padding:0;
    box-sizing: border-box;
`;

const Home = () => {


    return (
        <Main>
            <Header />
            <h1>Home</h1>
        </Main>
    )
}

export default Home;