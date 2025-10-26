import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/MovieSearch.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <Link to="/search" className="back-link">← Back</Link>
      <h2>{movie.title}</h2>
      {movie.poster_path && (
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      )}
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;