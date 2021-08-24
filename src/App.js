import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./components/Movie";

function App() {
  const API_KEY = "api_key=95cf3273f53ef50fc7371e3b988593c2";
  const BASE_URL = "https://api.themoviedb.org/3";
  const POPULAR_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

  const searchURL = BASE_URL + "/search/movie?" + API_KEY;

  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const moviesP = await axios(POPULAR_URL);
    console.log(moviesP.data.results);
    setMovies(moviesP.data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </main>
  );
}

export default App;
