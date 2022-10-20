import axios from 'axios';
import { atom, selector } from "recoil";



export const isPlayingAtom = atom({
    key: "isPlaying",
    default: true
});

const BASE_URL = 'https://shazam-core.p.rapidapi.com/v1'

const options = {
    method: 'GET',
    url: `${BASE_URL}/charts/country`,
    params: { country_code: 'KR' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_SHAZAM_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_SHAZAM_HOST
    }
};

export const chartListSelector = selector({
    key: 'chartListSelector',
    get: async () => {
        try {
            const res = await axios.request(options);
            return res.data;
        } catch (error) {
            console.error(error);
        };

    }
})





