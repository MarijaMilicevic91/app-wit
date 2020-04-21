import React, { useEffect, useState } from "react";
import { getSimilar } from "../../api/tmdb-api";
import { Link } from "react-router-dom";
import './similar.css';

export default ({ movie }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    getSimilar(movie.id).then(similar => {
      setSimilar(similar);
    });
  }, );
  return (
    <div>
    <div className="centre">
       {similar.map(s => {
            return (
      <Link class="card" to={`/movies/${s.id}`} key={s.id}>
     < img class="card-img-top" src={s.poster_path?`https://image.tmdb.org/t/p/w500/${s.poster_path}`:
                 "./s-poster-placeholder.png"} alt="Card image cap"/>
       {s.title}
      </Link>
  
  );
         })
    
       }</div>
       </div>
  )

};