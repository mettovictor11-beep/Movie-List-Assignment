function MovieItem({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
}

export default MovieItem;