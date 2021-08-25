import object from "../api/Api";
import axios from "axios";

function Form({ setSearchTerm, setMovies, searchTerm, fetchData }) {
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const search = object.searchURL + "&query=" + searchTerm;
    if (searchTerm) {
      const moviesSearch = await axios(search);
      setMovies(moviesSearch.data.results);
    } else {
      fetchData();
    }
    e.target.reset();
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <header>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="Search"
          className="search"
        ></input>
      </form>
    </header>
  );
}

export default Form;
