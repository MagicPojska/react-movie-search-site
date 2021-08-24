function Movie({ title, poster_path, overview, vote_average }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const getColor = (vote) => {
    if (vote >= 8.0) {
      return "green";
    } else if (vote < 8.0 && vote >= 5.0) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie">
      <img src={IMG_URL + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={getColor(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
                <h3>Overview</h3>
                {overview}
        </div>
    </div>
  );
}

export default Movie;
