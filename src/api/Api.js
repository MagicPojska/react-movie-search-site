const API_KEY = "api_key=95cf3273f53ef50fc7371e3b988593c2";
const BASE_URL = "https://api.themoviedb.org/3";
const POPULAR_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

export default { API_KEY, BASE_URL, POPULAR_URL, searchURL };
