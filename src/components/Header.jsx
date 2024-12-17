import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Header() {
  const { search, setSearch, handleSearch, isLoading } = useContext(AppContext);

  return (
    <div className="bg-dark py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col d-flex">
            <h1 className="text-danger mb-0">BOOLFLIX</h1>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search a movie"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-danger"
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? "Searching" : "Search"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
