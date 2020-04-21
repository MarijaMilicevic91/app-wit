import React, { useState, useEffect } from "react";
import { getTopRated } from "../api/tmdb-api";
import './topRated.css';
import { Link } from "react-router-dom";

export default props => {
  const [toprated, setToprated] = useState([]);

  useEffect(() => {
    getTopRated().then(toprated => {
      setToprated(toprated);
    });
  }, );
  return (
    <div className="centre">
       {toprated.map(t => {
            return (
      <Link className="card" to={`/movies/${t.id}`} key={t.id}>
        <img 
        className="card-img-top" src={t.poster_path?`https://image.tmdb.org/t/p/w500/${t.poster_path}`:
              "./t-poster-placeholder.png"} 
        />
        <div className="title"> {t.title}</div>
        <div className="vote"></div>
      </Link>
  );
         })
    
       }
       </div>
  )

};