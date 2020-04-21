import React, { useContext } from "react";
import { GenresContext } from '../../contexts/genresContext';
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";
import AuthHeader from '../../authHeader';

const SiteHeader = props => {
  
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <nav className="navbar navbar-light fixed-top">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          MDB
        </Link>
      </nav>
      <span>
      <input className="searchbar"
            type="text"
            placeholder="Search by Title"
            onChange={handleTextChange}
          />
      </span>
      <nav className="navbar navbar-expand">
      <AuthHeader/>
      </nav>
    </nav>
  );
  };

export default SiteHeader;