import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Catalogue from "./components/Catalogue";
import Form from "./components/Form";
import object from "./api/Api";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const moviesP = await axios(object.POPULAR_URL);
    setMovies(moviesP.data.results);
  }

  return (
    <div>
      <Form
        setSearchTerm={setSearchTerm}
        setMovies={setMovies}
        searchTerm={searchTerm}
        useEffect={useEffect}
        fetchData={fetchData}
      />
      <Catalogue movies={movies} />
    </div>
  );
}

export default App;
