import React from "react";

function Header({ search, setSearch, handleSearch, isLoading }) {
  return (
    <div>
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
    </div>
  );
}

export default Header;
