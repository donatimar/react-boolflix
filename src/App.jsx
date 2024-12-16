import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [seSelectedGenre, setSeSelectedGenre] = useState(null);

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
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
