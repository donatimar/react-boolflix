import React from "react";

function Main({ movies, series, isLoading, getFlag }) {
  return (
    <div className="row">
      <div className="col">
        {/* Film */}
        {movies.length > 0 && (
          <>
            <h2>Movies</h2>
            <ul className="list-group mb-4">
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
          </>
        )}
        {/* Serie TV */}
        {series.length > 0 && (
          <>
            <h2>TV Series</h2>
            <ul className="list-group">
              {series.map((tvShow) => (
                <li key={tvShow.id} className="list-group-item">
                  <h5>{tvShow.name}</h5>
                  <p>
                    <strong>Original Title:</strong> {tvShow.original_name}
                  </p>
                  <p>
                    <strong>Language:</strong> {tvShow.original_language}
                    {getFlag(tvShow.original_language) && (
                      <img
                        src={getFlag(tvShow.original_language)}
                        alt={tvShow.original_language}
                        style={{ width: 30, height: 30, marginLeft: 10 }}
                      />
                    )}
                  </p>
                  <p>
                    <strong>Rating:</strong> {tvShow.vote_average}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}

        {movies.length === 0 && series.length === 0 && !isLoading && (
          <p className="text-center">No results found</p>
        )}
      </div>
    </div>
  );
}

export default Main;
