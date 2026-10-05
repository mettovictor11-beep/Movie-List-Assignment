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

  return (
    <div className="container">
      <h1 className="title">My Movie List</h1>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;