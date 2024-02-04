import axios from 'axios';
const NEXT_PUBLIC_RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

const RAWG = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: NEXT_PUBLIC_RAWG_API_KEY,
  },
});

export default RAWG;
