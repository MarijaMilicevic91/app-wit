import React from "react";

const MovieHeader = ({ movie }) => {
  return (
    <div className="row">
      <div className="col-9">
        <h2>
          <a href={movie.homepage}>
          {movie.title}
          </a>
        </h2>
      </div>
    </div>
  );
};

export default MovieHeader;