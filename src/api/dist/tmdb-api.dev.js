"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpcoming = exports.getPopular = exports.getTopRated = exports.getSimilar = exports.getMovieCredits = exports.getMovieReviews = exports.getGenres = exports.getMovie = exports.getMovies = void 0;

var getMovies = function getMovies() {
  return fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1\n      https://api.themoviedb.org/3/discover/movie?api_key=").concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=2\n      https://api.themoviedb.org/3/discover/movie?api_key=").concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=3")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getMovies = getMovies;

var getMovie = function getMovie(id) {
  return fetch("https://api.themoviedb.org/3/movie/".concat(id, "?api_key=").concat(process.env.REACT_APP_TMDB_KEY)).then(function (res) {
    return res.json();
  });
};

exports.getMovie = getMovie;

var getGenres = function getGenres() {
  return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_TMDB_KEY + "&language=en-US").then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.genres;
  });
};

exports.getGenres = getGenres;

var getMovieReviews = function getMovieReviews(id) {
  return fetch("https://api.themoviedb.org/3/movie/".concat(id, "/reviews?api_key=").concat(process.env.REACT_APP_TMDB_KEY)).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getMovieReviews = getMovieReviews;

var getMovieCredits = function getMovieCredits(id) {
  return fetch("https://api.themoviedb.org/3/movie/".concat(id, "/credits?api_key=").concat(process.env.REACT_APP_TMDB_KEY)).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.cast;
  });
};

exports.getMovieCredits = getMovieCredits;

var getSimilar = function getSimilar(id) {
  return fetch("https://api.themoviedb.org/3/movie/".concat(id, "/similar?api_key=").concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getSimilar = getSimilar;

var getTopRated = function getTopRated() {
  return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getTopRated = getTopRated;

var getPopular = function getPopular() {
  return fetch('/api/movies').then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.movies;
  });
};

exports.getPopular = getPopular;

var getUpcoming = function getUpcoming() {
  return fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getUpcoming = getUpcoming;