import React, { useState, useEffect } from "react";
import { getPopular } from "../api/tmdb-api";
import './topRated.css';
import { Link } from "react-router-dom";

export default props => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular().then(popular => {
      setPopular(popular);
    });
  }, );
  return (
    <div className="centre">
       {popular.map(t => {
            return (
      <Link className="column card" to={`/movies/${t.id}`} key={t.id}>
        <img 
        className="card-img-top" src={t.poster_path?`https://image.tmdb.org/t/p/w200/${t.poster_path}`:
              "./t-poster-placeholder.png"} 
        />
        <div className="title">{t.title}</div>
        <div className="vote">{t.vote_average}</div>
      </Link>
        );
         })
       }
       </div>
  )

};