import React from "react";
import "../assets/css/index.css";

// Rating di stelle
const getStars = (rating) => {
  // Faccio diventare il voto da 1 a 5 (arrotondato per eccesso)
  const starCount = Math.ceil(rating / 2);
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < starCount ? "star" : "star-o"
  );
  return stars;
};

function Card({
  title,
  originalTitle,
  language,
  flag,
  rating,
  overview,
  posterUrl,
}) {
  const stars = getStars(rating);

  return (
    <div className="card-container">
      {/* Copertina di default */}
      <div
        className="card-poster"
        style={{
          backgroundImage: `url(${posterUrl})`,
        }}
      ></div>

      {/* Informazioni */}
      <div className="card-info">
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Original Title:</strong> {originalTitle}
        </p>
        <p>
          <strong>Language:</strong> {language}{" "}
          {flag && <img src={flag} alt={language} className="flag-icon" />}
        </p>
        <p>
          <strong>Rating:</strong>{" "}
          <span className="stars">
            {stars.map((star, index) => (
              <i key={index} className={`fa fa-${star}`}></i>
            ))}
          </span>
        </p>
        <p className="overview">{overview}</p>
      </div>
    </div>
  );
}

export default Card;
