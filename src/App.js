import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Catalogue from "./components/Catalogue";
import Form from "./components/Form";
import Api from "./api/Api";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const moviesP = await axios(Api.POPULAR_URL);
    setMovies(moviesP.data.results);
  }

  return (
    <div>
      <Form
        setSearchTerm={setSearchTerm}
        setMovies={setMovies}
        searchTerm={searchTerm}
      />
      <Catalogue movies={movies} />
    </div>
  );
}

export default App;
