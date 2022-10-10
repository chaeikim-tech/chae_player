import React from 'react';
import { Link } from "react-router-dom";
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
    left:0;
    bottom:0;
`;

const Nav = () => {
    return (
        <Wrapper>
            <Link to="/" >
                <AiOutlineHome size={"2em"} />
            </Link>
            <Link to="/search">
                <BiSearchAlt2 size={"2em"} />
            </Link>
            <Link to="/player">
                <AiOutlineUser size={"2em"} />
            </Link>
        </Wrapper>
    )
}

export default Nav;