import React, { useEffect, useState } from "react";
import { getTopRated } from "../../api/tmdb-api";

export default ({ movie }) => {
  const [toprated, setToprated] = useState([]);

  useEffect(() => {
    getTopRated(movie.id).then(toprated => {
      setToprated(toprated);
    });
  }, );
  return (
    <div>
    <div class="card-columns">
       {trending.map(s => {
            return (
      <div class="card" key={s.id}>
  <img class="card-img-top" src={s.poster_path?`https://image.tmdb.org/t/p/w500/${s.poster_path}`:
                 "./s-poster-placeholder.png"} alt="Card image cap"/>
                 <div class="card-body">
    <p class="card-text">{s.title}</p>
  </div>
  </div>
  );
         })
    
       }</div>
       </div>
  )

};