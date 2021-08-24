import Movie from './Movie'
function Catalogue({movies}) {
  return (<div className='main'>
       {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
  </div>);
}

export default Catalogue;
