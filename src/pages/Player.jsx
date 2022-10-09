import styled from "styled-components";
import { FaPlay, FaPause } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { IoPlaySkipBack, IoPlaySkipForward, IoHeartOutline } from 'react-icons/io5';
import { RiPlayList2Fill } from "react-icons/ri";
import { MdTune } from "react-icons/md";

const Wrapper = styled.div`
    background-color: #0C2D48;
    color:#B1D4E0;
    padding: 1rem 2rem;
    height: 100vh;
`;

const MusicAlign = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const MusicInfoTitle = styled(MusicAlign)``;

const MusicInfoSubtitle = styled(MusicAlign)``;

const MusicImg = styled(MusicAlign)`
    display: flex;
    justify-content: center;
    img{
        width: 300px;
        height: 300px;
        margin: 50px;
        border-radius: 10px;
    }
`;

const MusicTimeline = styled(MusicAlign)`

`;

const MusicBtn = styled(MusicAlign)`
`;

const Player = () => {
    return (
        <Wrapper>
            <MusicInfoTitle>
                <h3>Welcome To My Playground</h3>
                <IoIosArrowDown size={24} />
            </MusicInfoTitle>
            <MusicInfoSubtitle>

            </MusicInfoSubtitle>
            <MusicImg>
                <img src='https://image.yes24.com/goods/66904853/XL' />
            </MusicImg>
            <MusicBtn>
                <RiPlayList2Fill size={34} />
                <IoPlaySkipBack size={34} />
                <FaPlay size={34} />
                <IoPlaySkipForward size={34} />
                <MdTune size={34} />
            </MusicBtn>
        </Wrapper>
    )
}

export default Player;