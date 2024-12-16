import React from "react";

function Main({ movies, isLoading, getFlag }) {
  return (
    <div className="row">
      <div className="col">
        {movies.length > 0 ? (
          <ul className="list-group">
            {movies.map((movie) => (
              <li key={movie.id} className="list-group-item">
                <h5>{movie.title}</h5>
                <p>
                  <strong>Original Title:</strong> {movie.original_title}
                </p>
                <p>
                  <strong>Language:</strong> {movie.original_language}
                  {getFlag(movie.original_language) && (
                    <img
                      src={getFlag(movie.original_language)}
                      alt={movie.original_language}
                      style={{ width: 30, height: 30, marginLeft: 10 }}
                    />
                  )}
                </p>
                <p>
                  <strong>Rating:</strong> {movie.vote_average}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          !isLoading && <p className="text-center">No results found</p>
        )}
      </div>
    </div>
  );
}

export default Main;
