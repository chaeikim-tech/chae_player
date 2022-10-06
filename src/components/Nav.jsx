import React from 'react';
import styled from "styled-components";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';


const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    height: 60px;
    width: 100%;
    color: #8a8c8f;
    border-top: 1px solid #dee5e7;
    background-color: #f2f2f2;
    bottom:0;
`;

const Nav = () => {
    return (
        <Wrapper>
            <AiOutlineHome size={"2em"} />
            <BiSearchAlt2 size={"2em"} />
            <AiOutlineUser size={"2em"} />
        </Wrapper>
    )
}

export default Nav;