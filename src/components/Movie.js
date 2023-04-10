import React from "react";

// in case there is no image for the movie
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    // if movie poster response is N/A, use default image or use movie.poster as poster
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          src={poster}
          alt={`The movie titled: ${movie.Title}`}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;