import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import "./movieCredits.css";

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  }, );
  return (
    <div>
        <div className="centre">
        {credits.map(c => {
            return (
          <div className="card">
          <img 
          className="card-img-tag"
          src={
            c.profile_path
              ? `https://image.tmdb.org/t/p/w400/${c.profile_path}`
              : "./c-poster-placeholder.png" } />  
           <p>{c.name} ( {c.character} )</p> 
          </div>
            );}
        )}
        </div>
        </div>
  );
};