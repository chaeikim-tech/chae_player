import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'


const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    height: 60px;
    width: 100%;
    line-height: 60px;
    color: #8a8c8f;
    border-top: 1px solid #dee5e7;
    background-color: #f2f2f2;
    bottom:0
`;

const Nav = () => {
    return (
        <Wrapper>
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faUser} />
        </Wrapper>
    );
}

export default Nav;