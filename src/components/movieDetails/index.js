import React from "react";
import "./movieDetails.css";

export default ({ movie }) => {
  return (
    <>
      <ul className="list-group list-group-horizontal">
        <li key="rut" className="list-group-item ">
          {movie.runtime} min
        </li>
        
        <li key="rdv" className="list-group-item ">
          {movie.release_date}
        </li>
        {movie.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
        <li key className="list-group-item">
          {movie.vote_average}
        </li>
      </ul>
      <p className="overview">{movie.overview}</p>
        <p>{movie.video}</p>
    </>
  );
};
