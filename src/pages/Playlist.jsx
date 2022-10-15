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
    margin: 20px 10px;
    padding: 5px 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    &:hover{
        margin: 19.5px;
        background-color: rgba(255,255,255, 0.7);
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
    width: 110px;
    height: 110px;
    border-radius: 10px;
`

const StyledHiPlay = styled(ImPlay2)`
    display:none;
    position: absolute;
    top: 30px;
    right: 30px;
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

const Playlist = () => {

    return (
        <Wrapper>
            <MusicComp>
                <span style={{ fontSize: 25, fontWeight: 700, padding: 10 }}>1</span>
                <ImgContainer>
                    <MusicImg src={"https://image.yes24.com/goods/66904853/XL"} />
                    <StyledHiPlay size={50} />
                </ImgContainer>
                <MusicText>
                    <div style={{ fontSize: 22, fontWeight: 600 }}>Welcome To My Playground</div>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>NCT 127</div>
                </MusicText>

            </MusicComp>
        </Wrapper >
    )
}

export default Playlist;