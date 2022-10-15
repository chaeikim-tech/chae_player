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

const StyledHiPlay = styled(ImPlay2)`
    display:none;
    position: absolute;
    top: 70px;
    right: 70px;
    ${MusicContainer}:hover & {
        display: block;
        filter:drop-shadow(white 8px 5px 10px)
    }

`
const MusicText = styled.div`
    display: flex;
    flex-direction: column;
`


const Player = () => {
    return (
        <Wrapper>
            <MusicContainer>
                <ImgContainer>
                    <MusicImg src={"https://image.yes24.com/goods/66904853/XL"} />
                    <StyledHiPlay size={50} />
                </ImgContainer>
                <MusicText>
                    <span>Welcome To My Playground</span>
                    <span>NCT 127</span>
                </MusicText>
            </MusicContainer>
        </Wrapper>
    )
}

export default Player;