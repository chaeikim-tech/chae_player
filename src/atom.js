import { atom, selector, useRecoilValue } from "recoil";

const BASE_URL = 'https://shazam-core.p.rapidapi.com/v1'

export const isPlayingAtom = atom({
    key: "isPlaying",
    default: true
});



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_SHAZAM_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_SHAZAM_HOST
    }
};

fetch(`${BASE_URL}/charts/country?country_code=KR`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

