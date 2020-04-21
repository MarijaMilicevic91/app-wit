import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/movieContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);

  return (
      <PageTemplate 
        title='W.I.T.'
        movies={context.movies}
        action={movie => <AddToFavoritesButton movie={movie} /> }
      />
  );
};

export default MovieListPage;