import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [seSelectedGenre, setSeSelectedGenre] = useState(null);

  return <div></div>;
}

export default App;
