import React, {useState, useEffect } from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import {getMovie} from '../api/tmdb-api'
import { Link, Route } from "react-router-dom";
import MovieReviews from "../components/movieReviews";
import MovieCredits from "../components/movieCredits";
import MovieSimilar from "../components/movieSimilar";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
          <span>
          <div className="btn-group"> 
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link 
                className="btn btn-primary btn-block active btn-sm"
                to={`/movies/${id}/reviews`}
              >
                Reviews
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active btn-sm"
                to={`/movies/${id}`}
              >
                Hide
              </Link>
            )}
            {!props.history.location.pathname.endsWith("/credits") ? (
              <Link
                className="btn btn-dark btn-block active btn-sm"
                to={`/movies/${id}/credits`}
              >
                Cast
              </Link>
            ) : (
              <Link
                className="btn btn-danger btn-block active btn-sm"
                to={`/movies/${id}`}
              >
                Hide
              </Link>
            )}
            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link
                className="btn btn-primary btn-block active btn-sm"
                to={`/movies/${id}/similar`}
              >
                Similar Movies
              </Link>
            ) : (
              <Link
                className="btn btn-danger btn-block active btn-sm"
                to={`/movies/${id}`}
              >
                Hide
              </Link>
            )}
        </div>
        </span>
        </PageTemplate>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        <Route
          path={`/movies/:id/credits`}
          render={(props) => <MovieCredits movie={movie} {...props} />}
        />
        <Route
          path={`/movies/:id/similar`}
          render={(props) => <MovieSimilar movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for contact details</p>
    )}
  </>
  );
};

export default MoviePage;