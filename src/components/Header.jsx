import React from 'react';
import styled from "styled-components";
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position:fixed;
    min-height: 8vh;
    width:100%;
    background-color: white; 
    color: #8a8c8f;
    top: 0;
    z-index: 1;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2);
    h2{
        letter-spacing: 5px;
        font-size: 25px;
        font-weight: bold;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    height: 4vh;
    width: 300px;
    background-color: white;
    border-radius: 5px;
    border: 2px solid ;
    input{
        border: none;
        font-size: 16px;
    }
`



const Header = () => {


    return (
        <Wrapper>
            <h2>CHAE</h2>
            <SearchContainer>
                <BiSearchAlt2 size={25} style={{ padding: "0 8px" }} />
                <input />
            </SearchContainer>
        </Wrapper>
    )
}

export default Header