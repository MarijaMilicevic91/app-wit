import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";

const TemplateMoviePage = ({ movie, children }) => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={movie.title}
          />
        </div>
        <div className="col-6"><MovieHeader movie={movie} />{children}</div>
      </div>
    </>
  );
};

export default TemplateMoviePage;