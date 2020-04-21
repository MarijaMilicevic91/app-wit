import React, { useContext } from "react";
import { GenresContext } from '../../contexts/genresContext';
import { Link} from "react-router-dom";
import './header.css'

const Header = props => {
  const context = useContext(GenresContext);
  
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <div className="row">
      <div className="col">
            <Link className="btn btn-primary" to="/upcoming">Upcoming</Link>
            <Link className="btn btn-primary" to="/top_rated">Top Rated</Link>
            <Link className="btn btn-primary" to="/popular">Popular</Link>
            <select id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
      </div>
    </div>
  );
};

export default Header;