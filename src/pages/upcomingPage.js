import React, { useState, useEffect } from "react";
import { getUpcoming } from "../api/tmdb-api";
import './topRated.css';
import { Link } from "react-router-dom";

export default props => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getUpcoming().then(upcoming => {
      setUpcoming(upcoming);
    });
  }, );
  return (
    <div className="centre">
       {upcoming.map(t => {
            return (
      <Link className="card" to={`/movies/${t.id}`} key={t.id}>
        <img 
        className="card-img-top" src={t.poster_path?`https://image.tmdb.org/t/p/w500/${t.poster_path}`:
              "./t-poster-placeholder.png"} 
        />
        <div className="title">{t.release_date}</div>
        <div className="vote">{t.vote_average}</div>
      </Link>
        );
         })
       }
       </div>
  )

};