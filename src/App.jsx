import React, { useState } from "react";

function App() {
  // Global state
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Gestione ricerca film
  const handleSearch = async () => {
    if (!search.trim()) return; // Nessuna ricerca vuota

    setIsLoading(true);

    try {
      const apiKey = "2d87b080259acd9dbe80430182083cf4"; // API Key
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          search
        )}&api_key=${apiKey}`
      );
      const data = await response.json();

      setMovies(data.results || []); // Aggiorna lo stato con i risultati
    } catch (error) {
      console.error("Error during the search:", error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Funzione per determinare l'URL della bandiera in base alla lingua
  const getFlag = (languageCode) => {
    if (languageCode === "it") {
      return "/IT.png"; // Bandiera Italia
    } else if (languageCode === "en") {
      return "/US.png"; // Bandiera USA
    }
    return null; // Nessuna bandiera
  };

  return (
    <div className="container">
      <h1 className="text-center mb-3">Movie</h1>
      <div className="row justify-content-center mb-3">
        <div className="col">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search a movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? "Searching" : "Search"}
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
