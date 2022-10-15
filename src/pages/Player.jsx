import { useState, useEffect } from 'react';
import styled from "styled-components";
import { ImPlay2, ImPause } from "react-icons/im"


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    width: 60%;
    min-height: 100vh;
    right:0;
    top: 8vh;
`;

const MusicContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(125deg, #00416A 0%, #E4E5E6 100%);
    border-radius: 15px;
    width: 500px;
    height: 500px;
    cursor: pointer;
`;

const ImgContainer = styled.div`
    position: relative;
    display: inline-block;
`

const MusicImg = styled.img`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

const StyledImPlay = styled(ImPlay2)`
    display:none;
    position: absolute;
    top: 65px;
    right: 65px;
    ${MusicContainer}:hover & {
        display: block;
        filter:drop-shadow(white 8px 5px 10px)
    }

`

const StyledImPause = styled(ImPause)`
    display:none;
    position: absolute;
    top: 65px;
    right: 65px;
    ${MusicContainer}:hover & {
        display: block;
        filter:drop-shadow(white 8px 5px 10px)
    }

`

const MusicText = styled.div`
    display: flex;
    flex-direction: column;
`


const Player = (props) => {
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <Wrapper>
            <MusicContainer onClick={togglePlay}>
                <ImgContainer>
                    <MusicImg src={"https://image.yes24.com/goods/66904853/XL"} />
                    {isPlaying ? <StyledImPlay size={70} /> : <StyledImPause size={70} />}
                </ImgContainer>
                <MusicText>
                    <div style={{ fontSize: "22px", fontWeight: "600" }}>Welcome To My Playground</div>
                    <div style={{ fontSize: "15px", fontWeight: "600", paddingTop: "18px" }}>NCT 127</div>
                </MusicText>
            </MusicContainer>
        </Wrapper>
    )
}

export default Player;