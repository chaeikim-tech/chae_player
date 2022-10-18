import React, { Suspense } from 'react';
import styled from "styled-components";
import ChartList from '../components/ChartList';

const Wrapper = styled.div`
    left:0;
    top: 8vh;
    width: 40%;
    min-height: 100vh;
    position:absolute;
    overflow-x: scroll;
`;

const Playlist = () => {

    return (
        <Wrapper>
            <Suspense fallback={<div>Loading...</div>} >
                <ChartList />
            </Suspense>
        </Wrapper >

    )
}

export default Playlist;