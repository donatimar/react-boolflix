import React, { createContext, useState } from "react";

// Contesto Globale
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) return;

    setIsLoading(true);

    try {
      const apiKey = "2d87b080259acd9dbe80430182083cf4";
      const baseImageUrl = "https://image.tmdb.org/t/p/w342";
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

      // Copertina
      const formattedMovies = movieData.results.map((movie) => ({
        ...movie,
        poster_url: movie.poster_path
          ? `${baseImageUrl}${movie.poster_path}`
          : null, // No immagini
      }));

      const formattedSeries = tvData.results.map((tvShow) => ({
        ...tvShow,
        poster_url: tvShow.poster_path
          ? `${baseImageUrl}${tvShow.poster_path}`
          : null,
      }));

      setMovies(formattedMovies);
      setSeries(formattedSeries);
    } catch (error) {
      console.error("Error during the search:", error);
      setMovies([]);
      setSeries([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Bandierina
  const getFlag = (languageCode) => {
    if (languageCode === "it") {
      return "/IT.png";
    } else if (languageCode === "en") {
      return "/US.png";
    }
    return null;
  };

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        movies,
        series,
        isLoading,
        handleSearch,
        getFlag,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
