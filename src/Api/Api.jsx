import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "11853a2b536282d69d5b9cdc5cfc49a0";

const endPoints = {
    originals : "/discover/tv",
    trending : "/trending/all/week",
    popular : "/movie/popular",
    top_rated : "/movie/top_rated",
    upcoming : "/movie/upcoming"
}

export const getData = (param) => {
    return axios.get(`${URL}${endPoints[param]}?api_key=${API_KEY}`)
}