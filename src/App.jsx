import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  // Stato Globale
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Gestione ricerca Film e Serie TV
  const handleSearch = async () => {
    if (!search.trim()) return; // Nessuna ricerca vuota

    setIsLoading(true);

    try {
      const apiKey = "2d87b080259acd9dbe80430182083cf4"; // API Key
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          search
        )}&api_key=${apiKey}`
      );
      const tvResponse = await fetch(
        `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(
          search
        )}&api_key=${apiKey}`
      );
      const movieData = await movieResponse.json();
      const tvData = await tvResponse.json();

      // Aggiorno i risultati di Film e Serie TV
      setMovies(movieData.results || []);
      setSeries(tvData.results || []);
    } catch (error) {
      console.error("Error during the search:", error);
      setMovies([]);
      setSeries([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Determino l'URL della bandiera
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
      <Main
        movies={movies}
        series={series}
        isLoading={isLoading}
        getFlag={getFlag}
      />
    </div>
  );
}

export default App;
