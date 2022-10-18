import { useEffect, useState } from 'react';
import { isPlayingAtom } from '../atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from "styled-components";
import { ImPlay2, ImPause } from "react-icons/im";
import axios from 'axios';

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

const Playlist = () => {
    const [data, setData] = useState([]);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingAtom);
    const BASE_URL = 'https://shazam-core.p.rapidapi.com/v1'

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    };

    const options = {
        method: 'GET',
        url: `${BASE_URL}/charts/country`,
        params: { country_code: 'KR' },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_SHAZAM_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_SHAZAM_HOST
        }
    };

    async function getData() {
        await axios.request(options)
            .then((res) => { setData(res.data); console.log(res.data); })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <Wrapper>
            {data?.map((item, idx) => (
                <MusicComp key={item.key}>
                    <span style={{ fontSize: 22, fontWeight: 700, paddingRight: "35px" }}>{idx + 1}</span>
                    <ImgContainer onClick={togglePlay}>
                        <MusicImg src={item.images.coverart} />
                        {isPlaying ? <StyledImPlay size={40} /> : <StyledImPause size={40} />}
                    </ImgContainer>
                    <MusicText>
                        <div style={{ fontSize: 20, fontWeight: 600 }}>{item.title}</div>
                        <div style={{ fontSize: 15, fontWeight: 600 }}>{item.subtitle}</div>
                    </MusicText>
                </MusicComp>
            ))}
        </Wrapper >


    )
}

export default Playlist;