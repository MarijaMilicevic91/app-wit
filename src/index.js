import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/HomePage";
import MoviePage from './pages/moviePage';
import FavoriteMoviesPage from "./pages/favoritesMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/movieContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import LoginPage from './pages/loginPage';
import TopRatedPage from "./pages/topRatedPage";
import PopularPage from "./pages/popularPage";
import UpcomingPage from "./pages/upcomingPage";
import './style.css';
import Header from "./components/headerMovieList";

const App = () => {
  return (
   <BrowserRouter>
      <div className="bkg">
        <SiteHeader /> {/* New Header    */}
          <MoviesContextProvider>
          <GenresContextProvider>
          <Header/>
        <Switch>
          <Route path='/upcoming' component={UpcomingPage}/>
          <Route path='/popular' component={PopularPage}/>
          <Route path='/top_rated' component={TopRatedPage} />
          <Route path='/login' component={LoginPage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>
          </MoviesContextProvider>
        
      </div>
    </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));