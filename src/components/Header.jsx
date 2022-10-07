import React from 'react';
import styled from "styled-components";
import { FiMenu } from 'react-icons/fi';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    padding: 0.3em;
    height: 3em;
    width: 100%;
    color: #8a8c8f;
    border-bottom: 1px solid #dee5e7;
    background-color: #f2f2f2;
    top: 0;
`;



const Header = () => {

    return (
        <Wrapper>
            <h2 style={{ margin: '0.3em' }}>CHAE</h2>
            <Link to="/setting">
                <FiMenu size={"2em"} />
            </Link>

        </Wrapper>
    )
}

export default Header