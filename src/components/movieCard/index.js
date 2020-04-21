import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";

const Movie = ({movie, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center"
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }/>
          <div className="card-title">{movie.title}</div>
          <div className="circle">{movie.vote_average}</div>
        </Link>
        <div className="card-footer">
           {action(movie)}
        </div>
      </div>
    </div>
  );
};

export default (Movie);