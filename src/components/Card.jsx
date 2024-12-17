import React from "react";

function Card({ title, originalTitle, language, flag, rating, posterUrl }) {
  return (
    <div
      className="card text-white"
      style={{
        backgroundImage: `url(${posterUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "342px",
      }}
    >
      <div className="card-body d-flex flex-column justify-content-end bg-dark bg-opacity-50">
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-1">
          <strong>Original Title:</strong> {originalTitle}
        </p>
        <p className="card-text mb-1">
          <strong>Language:</strong> {language}{" "}
          {flag && (
            <img
              src={flag}
              alt={language}
              style={{ width: "30px", marginLeft: "10px" }}
            />
          )}
        </p>
        <p className="card-text">
          <strong>Rating:</strong>{" "}
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={`fa fa-${
                i < Math.ceil(rating / 2) ? "star" : "star-o"
              }`}
              style={{ color: "gold" }}
            ></i>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Card;
