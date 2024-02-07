import React from 'react';

function MovieDetails({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      {movie.genres && (
        <div>
          <h3>Genres:</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      <form>
        <label>
          First Name:
          <input type="text" />
        </label>
        <label>
          Surname:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Phone Number:
          <input type="tel" />
        </label>
        <button type="submit">Get Film</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MovieDetails;
