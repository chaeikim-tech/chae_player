import { useState, useEffect } from 'react';
import styled from "styled-components"
import { ImPlay2, ImPause } from "react-icons/im"

const Wrapper = styled.div`
    left:0;
    top: 8vh;
    width: 40%;
    min-height: 100vh;
    position:absolute;
    overflow-x: scroll;
`;

const MusicComp = styled.div`
    display:flex;
    align-items: center;
    margin: 10px 10px;
    padding: 15px 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    &:hover{
        background-color: rgba(0,0,0, 0.05);
        border-radius: 10px;
        cursor: pointer;
    }
`

const ImgContainer = styled.div`
    position: relative;
    display: inline-block;
`

const MusicImg = styled.img`
    position: relative;
    width: 90px;
    height: 90px;
    border-radius: 7px;
`

const StyledImPlay = styled(ImPlay2)`
    display:none;
    position: absolute;
    top: 25px;
    right: 25px;
    ${MusicComp}:hover & {
        display: block;
        filter:drop-shadow(white 8px 5px 10px)
    }

`

const StyledImPause = styled(ImPause)`
    display:none;
    position: absolute;
    top: 25px;
    right: 25px;
    ${MusicComp}:hover & {
        display: block;
        filter:drop-shadow(white 8px 5px 10px)
    }

`

const MusicText = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    height: 80px;
`

const Playlist = (props) => {
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <Wrapper>
            <MusicComp>
                <span style={{ fontSize: 22, fontWeight: 700, paddingRight: "35px" }}>1</span>
                <ImgContainer onClick={togglePlay}>
                    <MusicImg src={"https://image.yes24.com/goods/66904853/XL"} />
                    {isPlaying ? <StyledImPlay size={40} /> : <StyledImPause size={40} />}
                </ImgContainer>
                <MusicText>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>Welcome To My Playground</div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>NCT 127</div>
                </MusicText>

            </MusicComp>
        </Wrapper >
    )
}

export default Playlist;