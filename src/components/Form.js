import Api from "/home/mrrobot/Documents/react-movie-search-site/src/api/Api";
import axios from "axios";

function Form({ setSearchTerm, setMovies, searchTerm }) {
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const search = Api.searchURL + "&query=" + searchTerm;
    const moviesSearch = await axios(search);
    setMovies(moviesSearch.data.results);
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
