function MovieItem({ movie, onDelete }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>

      <button onClick={() => onDelete(movie.id)}>
        Delete
      </button>
    </div>
  );
}

export default MovieItem;