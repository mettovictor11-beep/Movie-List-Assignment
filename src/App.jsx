import { useState } from "react";
import MovieList from "./components/MovieList";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi"
    },
    {
      id: 2,
      title: "Black Panther",
      year: 2018,
      genre: "Action"
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action"
    },
    {
      id: 4,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi"
    }
  ]);

  const [title, setTitle] = useState("");
const [year, setYear] = useState("");
const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  const newMovie = {
    id: Date.now(),
    title: title,
    year: year,
    genre: genre
  };

  setMovies([...movies, newMovie]);

  setTitle("");
  setYear("");
  setGenre("");
};

  const handleDelete = (id) => {
    setMovies((currentMovies) =>
      currentMovies.filter((movie) => movie.id !== id)
    );
  };

  return (
  <div className="container">
    <h1 className="title">My Movie List</h1>

    <form onSubmit={handleSubmit}>
      <input
  type="text"
  placeholder="Movie title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<input
  type="number"
  placeholder="Year"
  value={year}
  onChange={(e) => setYear(e.target.value)}
/>

<input
  type="text"
  placeholder="Genre"
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
/>
      <button type="submit">Add Movie</button>
    </form>

    <MovieList movies={movies} onDelete={handleDelete} />
  </div>
);
}

export default App;