'use strict';

const numberOfFilms = +prompt('How much films do you see?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Last film?', ''),
      b = prompt('Mark', ''),
      c = prompt('Last film', ''),
      d = prompt('Mark', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);