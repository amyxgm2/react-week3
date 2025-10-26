import React from "react";
import "../styles/MovieSearch.css";

function MovieCard({ movie }) {
  return (
    <div className="card">
      {movie.Poster && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.Poster}`}
          alt={movie.Title}
        />
      )}
      <div className="card-content">
        <h3>{movie.Title}</h3>
        <p>
          {movie.Overview
            ? movie.Overview.slice(0, 100) + "..."
            : "No overview available."}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;