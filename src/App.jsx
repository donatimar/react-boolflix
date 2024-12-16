import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

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

  // Determina l'URL della bandiera
  const getFlag = (languageCode) => {
    if (languageCode === "it") {
      return "/IT.png";
    } else if (languageCode === "en") {
      return "/US.png";
    }
    return null; // Nessuna bandiera
  };

  return (
    <div className="container">
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />
      <Main movies={movies} isLoading={isLoading} getFlag={getFlag} />
    </div>
  );
}

export default App;
