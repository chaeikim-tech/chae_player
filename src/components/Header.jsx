import React from 'react';
import styled from "styled-components";
import { FiMenu } from 'react-icons/fi';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    width:100%;
    color: #8a8c8f;
    border-bottom: 1px solid #dee5e7;
    background-color: #f2f2f2;
    top: 0;

    h2{
        letter-spacing: 5px;
        font-size: 25px;
        font-weight: bold;
        
    }
    .navLinks{
        display:flex;
        justify-content: space-around;
        width: 30%;
        @media (max-width: 1024px){
            width: 60%;
        };
        @media (max-width: 768px){
            position: absolute;
            right:0px;
            width: 50%;
            height: 92vh;
            top: 8vh;
            display:flex;
            flex-direction:column;
            align-items:center;
            background-color: #f2f2f2;
            transform: translateX(100%);
            transition: transform 0.5s ease-in;
        };
        li{
            list-style: none;
            @media (max-width: 768px){
                opacity: 0;
        };
        }
        a{
            text-decoration: none;;
            letter-spacing: 2px;
            font-weight: bold;
        }
    }
    .burgerMenu{
        display:none;
        cursor: pointer;
         @media (max-width: 768px){
            display: block;
        };
    }
    .navAcitve{
        transform: translateX(0%);
    }

    @keyframes navLinkFade{
        from{
            opacity:0;
            transform: translateX(50px);
        }
        to{
            opacity:1;
            transform: translateX(0px);
        }
    }
`;



const Header = () => {

    const NavSlide = () => {
        const burger = document.querySelector('FiMenu');
        const nav = document.querySelector(".navLinks");
        const navLinks = document.querySelectorAll('.navLinks li')

        nav.classList.toggle('navAcitve');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
            }
        })

    }

    return (
        <Wrapper>
            <h2>CHAE</h2>
            <ul className="navLinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Chart</Link></li>
                <li><Link to="/">Playlist</Link></li>
                <li><Link to="/">Setting</Link></li>
            </ul>
            <FiMenu className="burgerMenu" onClick={NavSlide} />
        </Wrapper>
    )
}

export default Header