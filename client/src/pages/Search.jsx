import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MovieSearch.css";
import MovieCard from "../components/Moviecard";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const res = await fetch(`/movies?title=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.error) setError(data.error);
      else setMovies(data.results);
    } catch {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          placeholder="Search movies..."
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="results">
        {movies.map((m) => (
          <Link to={`/search/${m.movieId}`} key={m.movieId} className="movie-link">
            <MovieCard movie={m} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Search;