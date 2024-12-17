import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Card from "./Card";

function Main() {
  const { movies, series, getFlag } = useContext(AppContext);

  // Lista di card
  const generateCards = (items, type) => {
    return items.map((item) => (
      <div key={item.id} className="col-12 col-md-6 col-lg-3 mb-4">
        <Card
          title={type === "movie" ? item.title : item.name}
          originalTitle={
            type === "movie" ? item.original_title : item.original_name
          }
          language={item.original_language}
          flag={getFlag(item.original_language)}
          rating={item.vote_average}
          posterUrl={item.poster_url}
          overview={item.overview}
        />
      </div>
    ));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Film */}
        {movies.length > 0 && (
          <>
            <h2 className="text-center mb-4">Movies</h2>
            <div className="row">{generateCards(movies, "movie")}</div>
          </>
        )}

        {/* Serie TV */}
        {series.length > 0 && (
          <>
            <h2 className="text-center mt-4 mb-4">TV Series</h2>
            <div className="row">{generateCards(series, "series")}</div>
          </>
        )}

        {/* Nessun risultato */}
        {movies.length === 0 && series.length === 0 && (
          <p className="text-center">No results found</p>
        )}
      </div>
    </div>
  );
}

export default Main;
